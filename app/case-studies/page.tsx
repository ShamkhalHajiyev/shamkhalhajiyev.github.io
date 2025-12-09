'use client';

import { motion } from 'framer-motion';
import CaseStudyCard from '@/components/CaseStudyCard';

/**
 * Case studies based on professional projects
 */
const caseStudies = [
    {
        title: 'Transforming Sales Planning with 90% Accurate Forecasts',
        client: 'Enterprise Healthcare Technology',
        problem: 'Sales teams spent weeks manually creating forecasts with inconsistent accuracy, leading to inventory issues and missed targets.',
        outcome: '95% reduction in planning time and 90%+ forecast accuracy, enabling data-driven strategic decisions.',
        technologies: ['Azure ML', 'LSTM', 'ARIMA', 'Power BI', 'Python'],
        slug: 'sales-forecasting-platform',
    },
    {
        title: 'Protecting $2.3M in Revenue with Predictive Churn Analytics',
        client: 'Enterprise Healthcare Technology',
        problem: 'Customer attrition was causing significant revenue loss, but the business lacked visibility into which customers were at risk and why.',
        outcome: '15% improvement in customer retention and $2.3M in protected annual revenue through proactive intervention.',
        technologies: ['XGBoost', 'CatBoost', 'SHAP', 'Azure ML', 'Power BI'],
        slug: 'churn-prediction-engine',
    },
    {
        title: 'Building a Real-Time Analytics Control Tower',
        client: 'Enterprise Healthcare Technology',
        problem: 'Program performance data was scattered across systems, making it impossible to benchmark and optimize across 19+ key metrics.',
        outcome: '99.9% pipeline uptime with 40% faster processing, enabling real-time performance benchmarking across global programs.',
        technologies: ['Polars', 'Python', 'Azure ML', 'REST APIs', 'Power BI'],
        slug: 'analytics-control-tower',
    },
    {
        title: 'Financial Risk Analytics Platform for Portfolio Managers',
        client: 'CRISIL Irevna',
        problem: 'Portfolio managers lacked a unified view of risk exposure across assets, relying on manual spreadsheet analysis.',
        outcome: 'Self-service analytics platform enabling real-time risk assessment and asset allocation optimization.',
        technologies: ['Python', 'Dash', 'Docker', 'MySQL', 'Financial Analytics'],
        slug: 'financial-risk-analytics',
    },
];

/**
 * Case Studies page - Long-form project breakdowns
 */
export default function CaseStudiesPage() {
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
                    <span className="section-eyebrow mb-4 inline-block">Case Studies</span>
                    <h1 className="section-title">Impact in Detail</h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        In-depth explorations of how I approach complex data science challenges, from problem definition to measurable business outcomes.
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={study.slug}
                            title={study.title}
                            client={study.client}
                            problem={study.problem}
                            outcome={study.outcome}
                            technologies={study.technologies}
                            slug={study.slug}
                            index={index}
                        />
                    ))}
                </div>

                {/* Methodology Section */}
                <motion.section variants={itemVariants} className="mt-20">
                    <div className="section-header">
                        <h2 className="section-title">My Approach</h2>
                        <p className="section-subtitle">
                            Every engagement follows a disciplined methodology
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                step: '01',
                                title: 'Discovery',
                                description: 'Deep stakeholder interviews to understand the business problem and success metrics.',
                            },
                            {
                                step: '02',
                                title: 'Experimentation',
                                description: 'Rapid prototyping and model iteration with rigorous validation frameworks.',
                            },
                            {
                                step: '03',
                                title: 'Production',
                                description: 'Scalable deployment with monitoring, documentation, and change management.',
                            },
                            {
                                step: '04',
                                title: 'Impact',
                                description: 'Continuous measurement and optimization to maximize business outcomes.',
                            },
                        ].map((phase, i) => (
                            <motion.div
                                key={phase.step}
                                variants={itemVariants}
                                transition={{ delay: i * 0.1 }}
                                className="card text-center"
                            >
                                <div className="text-4xl font-bold text-[var(--primary)]/20 mb-3">{phase.step}</div>
                                <h3 className="text-base font-semibold mb-2">{phase.title}</h3>
                                <p className="text-sm text-[var(--secondary)]">{phase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section variants={itemVariants} className="mt-20 text-center">
                    <div className="card py-10 max-w-2xl mx-auto">
                        <h3 className="mb-3">Have a similar challenge?</h3>
                        <p className="text-[var(--secondary)] mb-6">
                            Let&apos;s discuss how data science can drive measurable outcomes for your organization.
                        </p>
                        <a href="mailto:hajiyev.shamkhal@gmail.com" className="btn btn-primary">
                            Start a Conversation
                        </a>
                    </div>
                </motion.section>
            </motion.div>
        </main>
    );
}
