'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CaseStudyCardProps {
    title: string;
    client: string;
    problem: string;
    outcome: string;
    technologies: string[];
    slug: string;
    index?: number;
}

/**
 * Case study preview card
 * Shows problem/solution/outcome teaser
 */
export default function CaseStudyCard({
    title,
    client,
    problem,
    outcome,
    technologies,
    slug,
    index = 0,
}: CaseStudyCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="card group h-full flex flex-col"
        >
            {/* Client badge */}
            <span className="section-eyebrow text-xs mb-3">{client}</span>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                <Link href={`/case-studies/${slug}`}>{title}</Link>
            </h3>

            {/* Problem & Outcome */}
            <div className="space-y-4 mb-6 flex-grow">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--secondary)] mb-1">
                        The Challenge
                    </p>
                    <p className="text-sm text-[var(--foreground)]">{problem}</p>
                </div>
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--secondary)] mb-1">
                        The Outcome
                    </p>
                    <p className="text-sm text-[var(--primary)] font-medium">{outcome}</p>
                </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="chip text-xs">
                        {tech}
                    </span>
                ))}
                {technologies.length > 4 && (
                    <span className="chip text-xs">+{technologies.length - 4}</span>
                )}
            </div>

            {/* Read more link */}
            <Link
                href={`/case-studies/${slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
            >
                Read case study
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </motion.article>
    );
}
