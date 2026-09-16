import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with questions, feedback, or partnership inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">Contact</p>
      <h1 className="font-display text-4xl text-trail-800 mt-2 mb-6">We&apos;d like to hear from you</h1>
      <p className="text-inkmuted leading-relaxed max-w-prose">
        Questions about the calculator, feedback on an article, a correction to suggest, or a
        partnership idea — all of it is welcome. We read every message and reply within
        2-3 business days, though it can occasionally take a little longer during busy periods.
      </p>

      <div className="mt-8 rounded-2xl border border-trail-100 bg-surface p-6">
        {/* [CONTACT FORM] */}
        <p className="text-sm text-inkmuted italic">[CONTACT FORM]</p>
      </div>

      <p className="text-inkmuted mt-8">
        Prefer email? Reach us directly at{" "}
        <span className="text-trail-700 font-medium">[EMAIL ADDRESS]</span>
      </p>
    </div>
  );
}
