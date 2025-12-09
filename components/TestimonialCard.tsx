'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
    index?: number;
}

/**
 * Testimonial card with quote, author info, and avatar
 * Placeholder structure for future testimonials
 */
export default function TestimonialCard({
    quote,
    author,
    role,
    company,
    avatar,
    index = 0,
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card h-full flex flex-col"
        >
            {/* Quote icon */}
            <div className="text-4xl text-[var(--primary)]/30 mb-4">&ldquo;</div>

            {/* Quote text */}
            <blockquote className="text-[var(--foreground)] text-base leading-relaxed mb-6 flex-grow italic">
                {quote}
            </blockquote>

            {/* Author info */}
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-semibold text-lg">
                    {avatar ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={avatar} alt={author} className="w-full h-full rounded-full object-cover" />
                    ) : (
                        author.charAt(0)
                    )}
                </div>
                <div>
                    <p className="font-semibold text-[var(--foreground)]">{author}</p>
                    <p className="text-sm text-[var(--secondary)]">
                        {role} at {company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
