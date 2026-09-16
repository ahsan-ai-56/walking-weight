import Link from "next/link";

const NAV = [
  { href: "/#calculator", label: "Calculator" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-trail-100 bg-surface/95 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg text-trail-700">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-trail-600 text-white text-sm"
          >
            W
          </span>
          Walking Weight Loss Calculator
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-inkmuted hover:text-trail-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#calculator"
          className="hidden sm:inline-flex items-center rounded-full bg-sunrise-500 px-4 py-2 text-sm font-medium text-white hover:bg-sunrise-600 transition-colors"
        >
          Open calculator
        </Link>
      </div>
    </header>
  );
}
