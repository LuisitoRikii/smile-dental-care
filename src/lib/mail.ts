import { Resend } from "resend";

export type ContactAttachment = {
  filename: string;
  content: Buffer;
};

export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
  attachments: ContactAttachment[];
};

type MailConfig = {
  apiKey: string;
  from: string;
  to: string;
  replyTo: string;
};

function readConfig(): MailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
  const to = process.env.RESEND_TO_EMAIL?.trim();

  if (!apiKey || !fromEmail || !to) return null;

  const fromName = process.env.RESEND_FROM_NAME?.trim();
  const from =
    fromName && !fromEmail.includes("<") ? `${fromName} <${fromEmail}>` : fromEmail;

  return {
    apiKey,
    from,
    to,
    replyTo: process.env.RESEND_REPLY_TO_EMAIL?.trim() ?? "",
  };
}

export function isContactMailConfigured(): boolean {
  return readConfig() !== null;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildBody(submission: ContactSubmission) {
  const { name, email, phone, message, attachments } = submission;

  const rows: { label: string; value: string }[] = [
    { label: "Nombre", value: name },
    { label: "Correo electrónico", value: email },
    { label: "Teléfono", value: phone },
    { label: "Mensaje", value: message },
  ].filter((row) => row.value);

  const html = [
    "<div style=\"font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#151515\">",
    '<p style="margin:0 0 18px;color:#3778b0;font-size:12px;letter-spacing:2px;text-transform:uppercase">',
    "Nuevo mensaje desde smiledentalcare.info",
    "</p>",
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:560px">',
    ...rows.map(
      (row) =>
        `<tr><td style="padding:8px 16px 8px 0;vertical-align:top;color:#8a8a8a;width:150px">${escapeHtml(
          row.label,
        )}</td><td style="padding:8px 0;vertical-align:top;color:#151515;white-space:pre-wrap">${escapeHtml(
          row.value,
        )}</td></tr>`,
    ),
    "</table>",
    attachments.length
      ? `<p style="margin:18px 0 0;color:#8a8a8a;font-size:13px">Adjuntos: ${attachments
          .map((file) => escapeHtml(file.filename))
          .join(", ")}</p>`
      : "",
    "</div>",
  ].join("");

  const text = rows.map((row) => `${row.label}: ${row.value}`).join("\n");

  return { html, text };
}

export async function sendContactEmail(submission: ContactSubmission): Promise<void> {
  const config = readConfig();

  if (!config) {
    throw new Error(
      "Faltan variables de entorno: RESEND_API_KEY, RESEND_FROM_EMAIL y/o RESEND_TO_EMAIL.",
    );
  }

  const { html, text } = buildBody(submission);
  const label = submission.name || submission.email;

  const resend = new Resend(config.apiKey);

  const { error } = await resend.emails.send({
    from: config.from,
    to: config.to,
    replyTo: config.replyTo || submission.email,
    subject: `Nuevo mensaje de contacto — ${label}`,
    html,
    text,
    attachments: submission.attachments.map((file) => ({
      filename: file.filename,
      content: file.content,
    })),
  });

  if (error) {
    throw new Error(`Resend: ${error.name} — ${error.message}`);
  }
}
