'use client';

import { motion } from 'framer-motion';

interface SkillBarProps {
    name: string;
    proficiency: number;
    index?: number;
}

/**
 * Animated skill proficiency bar
 * Shows skill name and animated fill based on proficiency level
 */
export default function SkillBar({ name, proficiency, index = 0 }: SkillBarProps) {
    return (
        <div className="group">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {name}
                </span>
                <span className="text-xs font-semibold text-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity">
                    {proficiency}%
                </span>
            </div>
            <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                />
            </div>
        </div>
    );
}
