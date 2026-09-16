import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Walking Weight Loss Calculator handles data, cookies, and advertising.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 prose-article">
      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">Legal</p>
      <h1 className="font-display text-4xl text-trail-800 mt-2 mb-2">Privacy Policy</h1>
      <p className="text-sm text-inkmuted mb-8">Last updated: [DATE]</p>

      <p>
        This Privacy Policy explains what information Walking Weight Loss Calculator
        (&quot;we,&quot; &quot;our,&quot; or &quot;the site&quot;) collects, how it&apos;s used,
        and the choices you have. We&apos;ve tried to write this in plain English rather than
        dense legal language.
      </p>

      <h2>The calculator doesn't store your health data</h2>
      <p>
        The walking weight loss calculator runs entirely in your browser. The age, weight,
        height, and pace you enter are used only to compute your results on your device and are
        not sent to or stored on our servers by default. If that changes in the future — for
        example, if we add an optional account or save feature — this policy will be updated to
        reflect it clearly before that feature launches.
      </p>

      <h2>Cookies and advertising</h2>
      <p>
        Like most free websites, we may use cookies and work with third-party advertising
        partners (such as Google AdSense or Adsterra) to keep the site free to use. These
        partners may collect information about your browsing activity — such as pages visited or
        general device information — through cookies or similar technologies, in accordance with
        their own privacy policies.
      </p>
      <p>
        We may also use analytics tools such as Google Analytics to understand overall traffic
        patterns (for example, which pages are most visited), which helps us decide what content
        to write next. This data is aggregated and not used to identify you individually.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can disable cookies entirely through your browser settings.</li>
        <li>
          Most advertising partners offer opt-out tools; Google&apos;s Ad Settings page is a
          common starting point for opting out of personalized advertising.
        </li>
        <li>Using a browser&apos;s private/incognito mode limits persistent cookie tracking.</li>
      </ul>

      <h2>Third-party links</h2>
      <p>
        Our articles and pages may link to external sources, including health authorities and
        research references. We&apos;re not responsible for the privacy practices of external
        sites you visit through these links.
      </p>

      <h2>Children's privacy</h2>
      <p>
        This site is not directed at children under 13, and we do not knowingly collect
        information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be reflected
        by updating the &quot;last updated&quot; date at the top of this page.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy can be sent through our <Link href="/contact">contact page</Link>.
      </p>

      <p className="text-sm italic mt-10">
        Note: This is a general privacy policy template and does not constitute legal advice. If
        your site serves users in the EU or California, have this policy reviewed by a qualified
        professional for GDPR and CCPA compliance specific to your data practices.
      </p>
    </div>
  );
}
