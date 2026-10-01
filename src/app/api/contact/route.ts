import { NextResponse } from "next/server";

import {
  isContactMailConfigured,
  sendContactEmail,
  type ContactAttachment,
} from "@/lib/mail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILES = 5;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const MAX_TOTAL_BYTES = 15 * 1024 * 1024;

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((at) => now - at < RATE_WINDOW_MS);

  if (recent.length >= RATE_LIMIT) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 1_000) hits.clear();
  return false;
}

function fail(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

function text(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim().slice(0, 4_000) : "";
}

async function readAttachments(formData: FormData): Promise<ContactAttachment[]> {
  const files = formData
    .getAll("attachments")
    .filter((entry): entry is File => typeof entry !== "string");

  if (files.length > MAX_FILES) {
    throw new Error(`Máximo ${MAX_FILES} archivos adjuntos.`);
  }

  let total = 0;
  const attachments: ContactAttachment[] = [];

  for (const file of files) {
    if (!file.size) continue;
    if (file.size > MAX_FILE_BYTES) {
      throw new Error(`"${file.name}" supera los 8 MB.`);
    }
    total += file.size;
    if (total > MAX_TOTAL_BYTES) {
      throw new Error("Los adjuntos superan los 15 MB en total.");
    }
    attachments.push({
      filename: file.name.slice(0, 120),
      content: Buffer.from(await file.arrayBuffer()),
    });
  }

  return attachments;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return fail("Demasiados envíos seguidos. Intenta de nuevo en un minuto.", 429);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return fail("Solicitud inválida.", 400);
  }

  // Honeypot: los bots rellenan este campo oculto. Se responde OK sin enviar.
  if (text(formData.get("company"))) {
    return NextResponse.json({ ok: true });
  }

  const name = text(formData.get("name"));
  const email = text(formData.get("email"));
  const phone = text(formData.get("phone"));
  const message = text(formData.get("message"));

  if (!email) return fail("El correo electrónico es obligatorio.", 400);
  if (!EMAIL_RE.test(email)) return fail("El correo electrónico no es válido.", 400);
  if (!name && !message) return fail("Completa al menos tu nombre o un mensaje.", 400);

  if (!isContactMailConfigured()) {
    return fail(
      "El formulario todavía no está configurado: faltan variables RESEND_* en .env.local.",
      503,
    );
  }

  let attachments: ContactAttachment[];
  try {
    attachments = await readAttachments(formData);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Adjuntos no válidos.", 400);
  }

  try {
    await sendContactEmail({ name, email, phone, message, attachments });
  } catch (error) {
    console.error("[contact] no se pudo enviar el correo:", error);
    return fail("No se pudo enviar el mensaje. Inténtalo de nuevo.", 502);
  }

  return NextResponse.json({ ok: true });
}
