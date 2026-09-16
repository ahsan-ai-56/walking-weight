import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Tool",
    links: [
      { href: "/#calculator", label: "Walking weight loss calculator" },
      { href: "/#formulas", label: "How the formulas work" },
      { href: "/#plans", label: "Walking plans by level" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/blog", label: "All articles" },
      { href: "/blog/how-many-steps-a-day-to-lose-weight", label: "Steps per day to lose weight" },
      { href: "/blog/walking-vs-running-for-weight-loss", label: "Walking vs running" },
      { href: "/blog/30-day-walking-plan-for-beginners", label: "30-day beginner plan" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact us" },
      { href: "/editorial-policy", label: "Editorial policy" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
      { href: "/disclaimer", label: "Medical disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-trail-800 text-trail-50 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-display text-sm text-white mb-3">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-trail-100 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-trail-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-trail-200">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Educational content only — not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
