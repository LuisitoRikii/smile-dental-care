"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Paperclip } from "lucide-react";

import { FloatingField } from "./FloatingField";
import { CONTACT } from "./data";

type Field = {
  label: string;
  type: string;
  name: string;
  required?: boolean;
};

type Props = {
  title: string;
  fields: readonly Field[];
  showNotes?: boolean;
  showAttach?: boolean;
  submitLabel: string;
  onCancel?: () => void;
  header?: ReactNode;
};

type Status = "idle" | "sending" | "sent" | "error";

type PostResponse = {
  ok?: boolean;
  error?: string;
};

export function SmileContactForm({
  title,
  fields,
  showNotes = false,
  showAttach = false,
  submitLabel,
  onCancel,
  header,
}: Props) {
  const [formKey, setFormKey] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [attachCount, setAttachCount] = useState(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const data = (await response.json().catch(() => ({}))) as PostResponse;

      if (!response.ok || !data.ok) {
        setStatus("error");
        setFeedback(data.error || CONTACT.submitError);
        return;
      }

      setStatus("sent");
      setAttachCount(0);
      setFormKey((key) => key + 1);
    } catch {
      setStatus("error");
      setFeedback(CONTACT.submitError);
    }
  };

  return (
    <form key={formKey} onSubmit={handleSubmit} className="relative">
      <div className="mb-[24px] flex items-start justify-between gap-[16px]">
        <h3 className="font-[family-name:var(--font-head)] text-[22px] font-semibold text-[#151515]">
          {title}
        </h3>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            aria-label={CONTACT.cancel}
            className="shrink-0 text-[13px] text-[#3778b0] underline underline-offset-4 transition-colors hover:text-[#151515]"
          >
            {CONTACT.cancel}
          </button>
        ) : null}
        {header}
      </div>

      <div className="absolute top-0 left-[-9999px]" aria-hidden="true">
        <label>
          No rellenar este campo
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {fields.map((field) => (
        <FloatingField
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          required={field.required}
        />
      ))}

      {showNotes ? (
        <textarea
          name={CONTACT.notesName}
          placeholder={CONTACT.notesLabel}
          rows={4}
          className="mb-[18px] w-full resize-y rounded-[10px] border border-[#dce6f0] bg-white p-[14px] text-[15px] leading-[1.6] text-[#151515] outline-none transition-colors placeholder:text-[#8a8a8a] focus:border-[#3778b0]"
        />
      ) : null}

      {showAttach ? (
        <div className="mb-[22px] flex items-center justify-between text-[14px] text-[#3778b0]">
          <label className="inline-flex cursor-pointer items-center gap-[8px] transition-colors hover:text-[#151515]">
            <Paperclip size={15} strokeWidth={1.9} />
            {CONTACT.attach}
            <input
              type="file"
              name="attachments"
              multiple
              className="sr-only"
              onChange={(event) => setAttachCount(event.target.files?.length ?? 0)}
            />
          </label>
          <span className="text-[12px] text-[#8a8a8a]">
            {CONTACT.attachCount.replace("(0)", `(${attachCount})`)}
          </span>
        </div>
      ) : null}

      <p className="mb-[26px] text-[12px] leading-[1.7] text-[#8a8a8a]">
        {CONTACT.recaptchaBefore}{" "}
        <a
          href={CONTACT.recaptchaPrivacyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3778b0] underline underline-offset-2"
        >
          {CONTACT.recaptchaPrivacy}
        </a>{" "}
        {CONTACT.recaptchaAfter}{" "}
        <a
          href={CONTACT.recaptchaTermsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3778b0] underline underline-offset-2"
        >
          {CONTACT.recaptchaTerms}
        </a>{" "}
        {CONTACT.recaptchaTail}
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="sm-btn sm-btn--solid w-full sm:w-auto disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "sending" ? CONTACT.submitSending : submitLabel}
      </button>

      {status === "sent" || status === "error" ? (
        <p
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`mt-[16px] rounded-[10px] px-[14px] py-[12px] text-[13.5px] leading-[1.6] ${
            status === "error"
              ? "bg-[#fdeeee] text-[#a63b3b]"
              : "bg-[#eaf2f9] text-[#2a5f96]"
          }`}
        >
          {status === "error" ? feedback : CONTACT.submitSuccess}
        </p>
      ) : null}
    </form>
  );
}
