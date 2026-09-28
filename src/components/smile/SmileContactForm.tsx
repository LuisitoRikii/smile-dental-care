"use client";

import type { FormEvent, ReactNode } from "react";
import { Paperclip } from "lucide-react";

import { FloatingField } from "./FloatingField";
import { CONTACT } from "./data";

type Props = {
  title: string;
  fields: readonly { label: string; type: string }[];
  showNotes?: boolean;
  showAttach?: boolean;
  submitLabel: string;
  onCancel?: () => void;
  header?: ReactNode;
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
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[24px] flex items-start justify-between gap-[16px]">
        <h3 className="font-[family-name:var(--font-head)] text-[22px] font-semibold text-[#151515]">
          {title}
        </h3>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            aria-label={CONTACT.cancel}
            className="shrink-0 text-[13px] text-[#8f6e6e] underline underline-offset-4 transition-colors hover:text-[#151515]"
          >
            {CONTACT.cancel}
          </button>
        ) : null}
        {header}
      </div>

      {fields.map((field) => (
        <FloatingField key={field.label} label={field.label} type={field.type} />
      ))}

      {showNotes ? (
        <textarea
          placeholder={CONTACT.notesLabel}
          rows={4}
          className="mb-[18px] w-full resize-y rounded-[10px] border border-[#ded7d1] bg-white p-[14px] text-[15px] leading-[1.6] text-[#151515] outline-none transition-colors placeholder:text-[#8a8a8a] focus:border-[#8f6e6e]"
        />
      ) : null}

      {showAttach ? (
        <div className="mb-[22px] flex items-center justify-between text-[14px] text-[#8f6e6e]">
          <span className="inline-flex cursor-pointer items-center gap-[8px] transition-colors hover:text-[#151515]">
            <Paperclip size={15} strokeWidth={1.9} />
            {CONTACT.attach}
          </span>
          <span className="text-[12px] text-[#8a8a8a]">{CONTACT.attachCount}</span>
        </div>
      ) : null}

      <p className="mb-[26px] text-[12px] leading-[1.7] text-[#8a8a8a]">
        {CONTACT.recaptchaBefore}{" "}
        <a
          href={CONTACT.recaptchaPrivacyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8f6e6e] underline underline-offset-2"
        >
          {CONTACT.recaptchaPrivacy}
        </a>{" "}
        {CONTACT.recaptchaAfter}{" "}
        <a
          href={CONTACT.recaptchaTermsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8f6e6e] underline underline-offset-2"
        >
          {CONTACT.recaptchaTerms}
        </a>{" "}
        {CONTACT.recaptchaTail}
      </p>

      <button type="submit" className="sm-btn sm-btn--solid w-full sm:w-auto">
        {submitLabel}
      </button>
    </form>
  );
}
