import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How we research, fact-check, and update content on Walking Weight Loss Calculator.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 prose-article">
      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">Legal</p>
      <h1 className="font-display text-4xl text-trail-800 mt-2 mb-6">Editorial Policy</h1>

      <p>
        This page explains how we research, write, and maintain content on Walking Weight Loss
        Calculator, so you know what standards our articles and calculator are held to.
      </p>

      <h2>How we research</h2>
      <p>
        Every factual claim on this site is checked against recognized, credible sources,
        including the Centers for Disease Control and Prevention (CDC), Mayo Clinic, Harvard
        Health Publishing, the National Institutes of Health (NIH), and the Compendium of
        Physical Activities for exercise-intensity data. We do not fabricate statistics, studies,
        or quotes, and we avoid citing sources we can&apos;t verify.
      </p>

      <h2>How the calculator's formulas are chosen</h2>
      <p>
        Our calculator uses the Mifflin-St Jeor equation for basal metabolic rate and standard
        MET (Metabolic Equivalent of Task) values for calorie-burn calculations — both widely
        used, peer-referenced methods in exercise science, rather than proprietary or unverified
        formulas.
      </p>

      <h2>Review and update cadence</h2>
      <p>
        Articles are reviewed periodically for accuracy as guidance from health authorities
        evolves. When a page is meaningfully updated, we reflect that with a revised
        &quot;last updated&quot; date where applicable.
      </p>

      <h2>Accuracy over sensationalism</h2>
      <p>
        We deliberately avoid exaggerated claims — no miracle timelines, no unrealistic
        before-and-after promises, no fear-based headlines. Weight loss is a gradual, individual
        process, and our content reflects that honestly rather than promising shortcuts.
      </p>

      <h2>Corrections</h2>
      <p>
        If you spot an error or outdated figure anywhere on the site, we want to know. Reach out
        through our contact page and we&apos;ll review and correct it promptly.
      </p>
    </div>
  );
}
