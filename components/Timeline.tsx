'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | null;
    description: string;
    technologies: string[];
}

interface TimelineProps {
    items: TimelineItem[];
}

/**
 * Vertical career timeline with animated connectors
 * Shows work experience in chronological order
 */
export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]/20" />

            <div className="space-y-8">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="relative pl-12"
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-9 h-9 rounded-full bg-[var(--card-bg)] border-2 border-[var(--primary)] flex items-center justify-center shadow-lg">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)]" />
                        </div>

                        {/* Content card */}
                        <div className="card hover:border-[var(--primary)]/50 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                                    <p className="text-[var(--primary)] font-medium">{item.company}</p>
                                </div>
                                <div className="text-sm text-[var(--secondary)] mt-2 md:mt-0 md:text-right">
                                    <p className="font-medium">
                                        {item.startDate} – {item.endDate || 'Present'}
                                    </p>
                                    <p>{item.location}</p>
                                </div>
                            </div>

                            <p className="text-[var(--secondary)] text-sm mb-4">{item.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {item.technologies.slice(0, 6).map((tech) => (
                                    <span key={tech} className="chip text-xs">
                                        {tech}
                                    </span>
                                ))}
                                {item.technologies.length > 6 && (
                                    <span className="chip text-xs">+{item.technologies.length - 6}</span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
