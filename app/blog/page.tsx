import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          faqSchema(post.faq),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Blog", url: `${siteConfig.url}/blog` },
            { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-inkmuted mb-6">
        <Link href="/" className="hover:text-trail-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-trail-700">Blog</Link>
      </nav>

      <p className="text-xs text-sunrise-600 font-medium">
        {new Date(post.datePublished).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        · {post.readingMinutes} min read
      </p>
      <h1 className="font-display text-3xl sm:text-4xl text-trail-800 mt-3">{post.title}</h1>

      <div
        className="prose-article mt-8"
        dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
      />

      <section className="mt-12">
        <h2 className="font-display text-2xl text-trail-700 mb-4">Frequently asked questions</h2>
        <div className="space-y-5">
          {post.faq.map((item) => (
            <div key={item.question}>
              <h3 className="font-display text-lg text-trail-700 mb-1">{item.question}</h3>
              <p className="text-inkmuted leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-2xl bg-trail-600 text-white p-6">
        <p className="font-display text-lg">See what this means for your own numbers</p>
        <p className="text-trail-50 text-sm mt-1">
          Plug your age, weight, and pace into the walking weight loss calculator for a
          personalized calorie and weight-loss estimate.
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center mt-4 rounded-full bg-sunrise-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sunrise-600 transition-colors"
        >
          Open the calculator
        </Link>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl text-trail-700 mb-4">Keep reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="rounded-xl border border-trail-100 p-4 hover:border-trail-300 transition-colors"
              >
                <p className="font-display text-sm text-trail-700">{r.title}</p>
                <p className="text-xs text-inkmuted mt-1">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
