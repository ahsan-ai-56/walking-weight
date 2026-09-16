import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Walking Weight Loss Calculator.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 prose-article">
      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">Legal</p>
      <h1 className="font-display text-4xl text-trail-800 mt-2 mb-2">Terms of Service</h1>
      <p className="text-sm text-inkmuted mb-8">Last updated: [DATE]</p>

      <h2>Acceptance of terms</h2>
      <p>
        By using Walking Weight Loss Calculator, you agree to these Terms of Service. If you
        don&apos;t agree with any part of these terms, please don&apos;t use the site.
      </p>

      <h2>Description of the service</h2>
      <p>
        We provide a free, browser-based calculator that estimates calories burned, steps,
        distance, and projected weight change from walking, along with related educational
        articles. The service is provided free of charge and without any account requirement.
      </p>

      <h2>No medical advice</h2>
      <p>
        Nothing on this site constitutes medical, dietary, or fitness advice tailored to your
        individual circumstances. All calculator results are estimates based on general formulas
        and should not be treated as precise or personalized medical guidance. See our full{" "}
        <Link href="/disclaimer">disclaimer</Link> for details.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site&apos;s design, original written content, and calculator code are owned by
        Walking Weight Loss Calculator unless otherwise noted. You&apos;re welcome to link to our
        pages; reproducing substantial portions of our content elsewhere without permission is
        not permitted.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        We provide this site &quot;as is&quot; without warranties of any kind. We are not liable
        for any decisions made, or outcomes experienced, based on information or calculator
        results from this site, to the fullest extent permitted by law.
      </p>

      <h2>Third-party links and advertising</h2>
      <p>
        This site may display third-party advertisements and links to external sites. We do not
        control and are not responsible for the content, products, or practices of any
        third-party site.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may revise these Terms of Service periodically. Continued use of the site after
        changes are posted constitutes acceptance of the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent through our <Link href="/contact">contact page</Link>.
      </p>
    </div>
  );
}
