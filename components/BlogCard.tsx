'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    slug: string;
    index?: number;
}

/**
 * Blog post preview card
 * Shows title, excerpt, date, read time, and tags
 */
export default function BlogCard({
    title,
    excerpt,
    date,
    readTime,
    tags,
    slug,
    index = 0,
}: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group h-full flex flex-col"
        >
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-[var(--secondary)] mb-3">
                <time dateTime={date}>{date}</time>
                <span>·</span>
                <span>{readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>

            {/* Excerpt */}
            <p className="text-[var(--secondary)] text-sm leading-relaxed mb-4 flex-grow">
                {excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span key={tag} className="chip text-xs">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Read more link */}
            <Link
                href={`/blog/${slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
            >
                Read article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </motion.article>
    );
}
