import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Walking Tips, Step Guides & Weight Loss Science",
  description:
    "Guides on walking for weight loss: step-count targets, walking vs running, beginner plans, gear reviews, and the science behind building a habit that sticks.",
  alternates: { canonical: "/blog" },
};

const POSTS_PER_PAGE = 10;

export default function BlogIndexPage() {
  const page1 = blogPosts.slice(0, POSTS_PER_PAGE);
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ])}
      />

      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">Blog</p>
      <h1 className="font-display text-4xl text-trail-800 mt-2">
        Walking tips, step-count guides & weight-loss science
      </h1>
      <p className="text-inkmuted mt-4 max-w-prose">
        Everything here is written to be actually useful on your next walk: how many steps you
        really need, walking versus running, beginner-friendly plans, gear worth buying, and the
        habit-building research behind why some routines stick and others don&apos;t. New guides
        are added regularly — check back often, or jump straight into the{" "}
        <Link href="/#calculator" className="text-trail-600 underline underline-offset-2">
          walking weight loss calculator
        </Link>{" "}
        if you just want your numbers.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {page1.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-trail-100 bg-surface p-6 hover:border-trail-300 transition-colors flex flex-col"
          >
            <p className="text-xs text-sunrise-600 font-medium">
              {new Date(post.datePublished).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.readingMinutes} min read
            </p>
            <h2 className="font-display text-lg text-trail-800 mt-2 group-hover:text-trail-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-inkmuted mt-2 flex-1">{post.excerpt}</p>
            <span className="text-sm text-trail-600 mt-4 font-medium">Read article →</span>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Blog pagination" className="mt-10 flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-trail-200 text-sm text-inkmuted"
            >
              {i + 1}
            </span>
          ))}
        </nav>
      )}
    </div>
  );
}
