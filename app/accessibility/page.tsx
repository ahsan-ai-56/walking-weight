import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to making Walking Weight Loss Calculator usable for everyone.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 prose-article">
      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">Legal</p>
      <h1 className="font-display text-4xl text-trail-800 mt-2 mb-6">Accessibility Statement</h1>

      <p>
        Walking Weight Loss Calculator is committed to making our calculator and content usable
        by as many people as possible, including people with disabilities.
      </p>

      <p>
        We aim to follow the Web Content Accessibility Guidelines (WCAG) where possible,
        including sufficient color contrast, keyboard-navigable interactive elements, visible
        focus indicators, semantic heading structure, and support for reduced-motion preferences.
      </p>

      <p>
        Accessibility is an ongoing effort rather than a one-time fix, and we continue to review
        and improve the site over time.
      </p>

      <h2>Let us know</h2>
      <p>
        If you encounter any barrier using this site — whether with the calculator, navigation,
        or reading our articles — please let us know through our contact page. Specific details
        about the issue and the device or assistive technology you were using help us fix it
        faster.
      </p>
    </div>
  );
}
