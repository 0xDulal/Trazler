import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/domain";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
        <Image
          src={post.coverImage}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-105"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 text-sm text-ink-500">
        <span className="font-medium text-brand-600">{post.category}</span>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h3 className="mt-2 text-xl font-semibold text-ink-900">
        <Link href={`/journal/${post.slug}`} className="hover:text-brand-600">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 leading-relaxed text-ink-600">
        {post.excerpt}
      </p>
      <p className="mt-4 text-sm text-ink-500">
        {post.author} · {formatDate(post.publishedAt)}
      </p>
    </article>
  );
}
