import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Why we built a free walking weight loss calculator, and how we keep the science behind it honest and trustworthy.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 prose-article">
      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">About us</p>
      <h1 className="font-display text-4xl text-trail-800 mt-2 mb-6">
        We think fitness tracking shouldn&apos;t require an app, an account, or a subscription
      </h1>

      <p>
        Walking Weight Loss Calculator started from a simple frustration: most calorie and
        weight-loss tools online are either buried behind sign-up walls, cluttered with ads
        before you can see a single number, or built on formulas nobody explains. We wanted
        something simpler — a free, fast, genuinely accurate tool you can use in under a minute,
        with the math shown openly rather than hidden behind a black box.
      </p>

      <h2>Why walking, specifically</h2>
      <p>
        Walking is the one form of exercise almost everyone can do, regardless of fitness level,
        equipment, or budget. It's low-impact, requires no learning curve, and fits into daily
        life more easily than almost any other activity. We chose to build a calculator focused
        entirely on walking because it deserves better tools than the generic, one-size-fits-all
        calorie calculators most fitness sites recycle.
      </p>

      <h2>What makes the calculator trustworthy</h2>
      <p>
        Every number the calculator produces comes from established, widely used formulas rather
        than internal guesswork:
      </p>
      <ul>
        <li>
          The <strong>Mifflin-St Jeor equation</strong> for estimating basal metabolic rate,
          generally considered one of the more accurate BMR formulas available.
        </li>
        <li>
          Standard <strong>MET (Metabolic Equivalent of Task) values</strong> from the
          Compendium of Physical Activities, the same reference used across exercise science
          research.
        </li>
        <li>
          Transparent calorie-to-weight conversion math, explained in full on our{" "}
          <Link href="/#formulas">how it works section</Link>, not hidden behind the results.
        </li>
      </ul>
      <p>
        You can read exactly how each number is calculated on the homepage — nothing about the
        tool is proprietary or obscured.
      </p>

      <h2>What we're not</h2>
      <p>
        We're not a medical provider, and nothing on this site should replace advice from a
        doctor or registered dietitian, especially if you have an existing health condition. See
        our full <Link href="/disclaimer">medical disclaimer</Link> for details.
      </p>

      <h2>We'd love to hear from you</h2>
      <p>
        If you spot something inaccurate, have a feature request, or just want to share how your
        walking routine is going, reach out through our{" "}
        <Link href="/contact">contact page</Link>. This site is built to actually help people
        walk more and understand their own progress — your feedback shapes that directly.
      </p>
    </div>
  );
}
