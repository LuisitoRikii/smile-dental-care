"use client";

import { useState } from "react";

type Props = {
  label: string;
  type: string;
  name: string;
  required?: boolean;
};

function autoCompleteFor(type: string, name: string): string {
  if (type === "email") return "email";
  if (type === "tel") return "tel";
  return name === "name" ? "name" : "off";
}

export function FloatingField({ label, type, name, required = false }: Props) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <label className="relative mb-[22px] block w-full">
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoCompleteFor(type, name)}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="block h-[56px] w-full border-0 border-b border-[#dce6f0] bg-transparent px-[10px] pt-[24px] pb-[8px] text-[16px] text-[#151515] outline-none transition-colors focus:border-[#3778b0]"
      />
      <span
        className={`pointer-events-none absolute left-[10px] font-[family-name:var(--font-head)] leading-normal transition-all duration-200 ${
          lifted
            ? "top-[7px] text-[12px] tracking-[1.2px] text-[#3778b0]"
            : "top-[18px] text-[15px] text-[#8a8a8a]"
        }`}
      >
        {label}
      </span>
    </label>
  );
}
