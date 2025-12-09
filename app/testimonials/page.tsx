'use client';

import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';

/**
 * Placeholder testimonials for future use
 */
const testimonials = [
    {
        quote: 'Shamkhal\'s forecasting models transformed how we approach sales planning. The accuracy and clarity of insights have been game-changing for our strategic decisions.',
        author: 'Placeholder Name',
        role: 'Director of Analytics',
        company: 'Enterprise Technology Company',
    },
    {
        quote: 'The churn prediction system Shamkhal built helped us proactively retain customers we would have lost. The SHAP explanations made it easy for our team to take action.',
        author: 'Placeholder Name',
        role: 'VP of Customer Success',
        company: 'Enterprise Technology Company',
    },
    {
        quote: 'Working with Shamkhal on our analytics infrastructure was a pleasure. He understood our business needs and delivered a solution that exceeded expectations.',
        author: 'Placeholder Name',
        role: 'Head of Data',
        company: 'Financial Services Firm',
    },
];

/**
 * Testimonials page - Placeholder structure for future testimonials
 */
export default function TestimonialsPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <motion.div
                className="container-custom section-padding"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="section-header">
                    <span className="section-eyebrow mb-4 inline-block">Testimonials</span>
                    <h1 className="section-title">What Colleagues Say</h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Feedback from team members, stakeholders, and collaborators I&apos;ve worked with.
                    </p>
                </motion.div>

                {/* Coming Soon Notice */}
                <motion.div
                    variants={itemVariants}
                    className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--border)] text-center"
                >
                    <div className="text-3xl mb-3">🌟</div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                        Testimonials Coming Soon
                    </h3>
                    <p className="text-[var(--secondary)] text-sm">
                        I&apos;m currently gathering feedback from colleagues and collaborators. The testimonials below are placeholders for illustration.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            company={testimonial.company}
                            index={index}
                        />
                    ))}
                </div>

                {/* Collaboration CTA */}
                <motion.section variants={itemVariants} className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="card text-center">
                            <div className="text-3xl mb-3">💼</div>
                            <h3 className="text-base font-semibold mb-2">Worked Together?</h3>
                            <p className="text-sm text-[var(--secondary)]">
                                If we&apos;ve collaborated, I&apos;d love to hear your feedback.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div className="text-3xl mb-3">🤝</div>
                            <h3 className="text-base font-semibold mb-2">Open to Projects</h3>
                            <p className="text-sm text-[var(--secondary)]">
                                Interested in working together on challenging data problems.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div className="text-3xl mb-3">📧</div>
                            <h3 className="text-base font-semibold mb-2">Get in Touch</h3>
                            <p className="text-sm text-[var(--secondary)]">
                                Reach out to discuss opportunities or collaborations.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section variants={itemVariants} className="mt-12 text-center">
                    <a href="mailto:hajiyev.shamkhal@gmail.com" className="btn btn-primary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Me
                    </a>
                </motion.section>
            </motion.div>
        </main>
    );
}
