'use client';

import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';

/**
 * Placeholder blog posts for the blog page
 */
const blogPosts = [
    {
        title: 'Building Production-Grade ML Pipelines in Azure',
        excerpt: 'A deep dive into designing scalable, maintainable machine learning pipelines using Azure ML, MLflow, and best practices from real-world deployments.',
        date: 'Coming Soon',
        readTime: '12 min read',
        tags: ['MLOps', 'Azure ML', 'Best Practices'],
        slug: 'production-ml-pipelines-azure',
    },
    {
        title: 'Why SHAP Explanations Matter for Business Stakeholders',
        excerpt: 'Translating complex ML model decisions into actionable insights that executives and domain experts can understand and trust.',
        date: 'Coming Soon',
        readTime: '8 min read',
        tags: ['ML Interpretability', 'SHAP', 'Stakeholder Communication'],
        slug: 'shap-explanations-business',
    },
    {
        title: 'From Polars to Production: High-Performance Data Processing',
        excerpt: 'How switching from Pandas to Polars transformed our analytics pipeline, achieving 10x performance gains on millions of records.',
        date: 'Coming Soon',
        readTime: '10 min read',
        tags: ['Polars', 'Data Engineering', 'Performance'],
        slug: 'polars-production-data-processing',
    },
    {
        title: 'The Art of Feature Engineering for Time Series Forecasting',
        excerpt: 'Practical techniques for creating powerful features that improve LSTM and ARIMA model accuracy in sales forecasting applications.',
        date: 'Coming Soon',
        readTime: '15 min read',
        tags: ['Time Series', 'Feature Engineering', 'Forecasting'],
        slug: 'feature-engineering-time-series',
    },
    {
        title: 'Churn Prediction: From Model to Business Impact',
        excerpt: 'A case study on building a customer churn prediction system that actually drives retention improvements and protects revenue.',
        date: 'Coming Soon',
        readTime: '11 min read',
        tags: ['Churn Prediction', 'Business Impact', 'Case Study'],
        slug: 'churn-prediction-business-impact',
    },
    {
        title: 'My Journey from Economics to Machine Learning Engineering',
        excerpt: 'Reflections on transitioning from a traditional economics background to building production ML systems, and lessons learned along the way.',
        date: 'Coming Soon',
        readTime: '7 min read',
        tags: ['Career', 'Personal', 'Learning'],
        slug: 'economics-to-ml-engineering',
    },
];

/**
 * Blog page - MDX-based blog system with placeholder posts
 */
export default function BlogPage() {
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
                    <span className="section-eyebrow mb-4 inline-block">Blog</span>
                    <h1 className="section-title">Thoughts & Insights</h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Technical deep dives, lessons learned, and reflections on building production ML systems.
                    </p>
                </motion.div>

                {/* Coming Soon Notice */}
                <motion.div
                    variants={itemVariants}
                    className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--border)] text-center"
                >
                    <div className="text-3xl mb-3">✍️</div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                        Blog Coming Soon
                    </h3>
                    <p className="text-[var(--secondary)] text-sm">
                        I&apos;m currently working on my first set of articles. Subscribe to get notified when new content is published.
                    </p>
                </motion.div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={post.slug}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            readTime={post.readTime}
                            tags={post.tags}
                            slug={post.slug}
                            index={index}
                        />
                    ))}
                </div>

                {/* Newsletter CTA */}
                <motion.section variants={itemVariants} className="mt-20 text-center">
                    <div className="card py-10 max-w-2xl mx-auto">
                        <h3 className="mb-3">Stay Updated</h3>
                        <p className="text-[var(--secondary)] mb-6">
                            Get notified when I publish new articles on ML, data engineering, and career insights.
                        </p>
                        <a
                            href="mailto:hajiyev.shamkhal@gmail.com?subject=Subscribe%20to%20Blog"
                            className="btn btn-primary"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Subscribe via Email
                        </a>
                    </div>
                </motion.section>
            </motion.div>
        </main>
    );
}
