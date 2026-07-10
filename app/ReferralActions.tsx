"use client";

import { useState } from "react";

const referralUrl = "https://www.uber.com/signup/drive/deliver/?invite_code=vyd3jny";

export function ReferralActions() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="referralBox">
      <textarea
        className="referralField"
        aria-label="Uber referral link"
        value={referralUrl}
        readOnly
        rows={3}
      />
      <div className="referralActions">
        <button type="button" onClick={copyLink}>{copied ? "Copied" : "Copy"}</button>
        <a href={referralUrl} target="_blank" rel="noreferrer">Register ↗</a>
      </div>
    </div>
  );
}
