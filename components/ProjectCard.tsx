'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectMetric {
    label: string;
    value: string;
}

interface ProjectCardProps {
    title: string;
    focus: string;
    description: string;
    metrics: ProjectMetric[];
    technologies: string[];
    githubUrl?: string;
    featured?: boolean;
    index?: number;
}

/**
 * Enhanced project card with tech stack badges and metrics
 * Supports featured styling and GitHub links
 */
export default function ProjectCard({
    title,
    focus,
    description,
    metrics,
    technologies,
    githubUrl,
    featured = false,
    index = 0,
}: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`project-card group ${featured ? 'border-[var(--primary)]/30' : ''}`}
        >
            {/* Focus badge */}
            <span className="section-eyebrow text-xs mb-3">{focus}</span>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                {title}
            </h3>

            {/* Description */}
            <p className="text-[var(--secondary)] text-sm leading-relaxed mb-4 flex-grow">
                {description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                {metrics.map((metric) => (
                    <div key={metric.label} className="stat-card p-3">
                        <span className="stat-value text-lg">{metric.value}</span>
                        <span className="stat-label text-xs">{metric.label}</span>
                    </div>
                ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech) => (
                    <span key={tech} className="chip text-xs">
                        {tech}
                    </span>
                ))}
            </div>

            {/* GitHub link */}
            {githubUrl && (
                <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    View on GitHub
                </Link>
            )}
        </motion.article>
    );
}
