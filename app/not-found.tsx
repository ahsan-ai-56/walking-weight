import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-24 text-center">
      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">404</p>
      <h1 className="font-display text-3xl text-trail-800 mt-2">This page took a wrong turn</h1>
      <p className="text-inkmuted mt-3">
        The page you&apos;re looking for doesn&apos;t exist, or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center mt-6 rounded-full bg-sunrise-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sunrise-600 transition-colors"
      >
        Back to the calculator
      </Link>
    </div>
  );
}
