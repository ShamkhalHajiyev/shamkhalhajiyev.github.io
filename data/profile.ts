/**
 * Centralized profile data for the portfolio
 * Single source of truth for personal information, taglines, and contact details
 */

export const profile = {
    name: 'Shamkhal Hajiyev',
    title: 'Data Scientist | Machine Learning Engineer',
    currentRole: 'Data Scientist & ML Engineer',

    tagline: 'I build production ML systems that predict demand, reduce churn, and drive measurable business impact.',

    bio: `Data Scientist & ML Engineer with 4+ years of experience. I help companies like Align Technology optimize operations through predictive analytics, delivering $4M+ in business value.`,

    extendedBio: `I am a Data Scientist & Machine Learning Engineer focused on building scalable, production-grade AI systems that solve real business problems. With over 4 years of experience, I have successfully delivered end-to-end ML solutions—from initial discovery and prototyping to deployment and monitoring in Azure ML and Databricks.

My technical expertise spans Python, SQL, and distributed computing (PySpark), with deep knowledge in predictive modeling, time series forecasting, and causal inference. I don't just build models; I build resilient analytical ecosystems that integrate seamlessly with business operations to drive decision-making.

Key achievements include developing sales forecasting models with 90% accuracy, building churn prediction systems that protected $2.3M in revenue, and modernizing ETL pipelines for 10x faster data processing. I thrive in cross-functional environments where I can combine statistical rigour with clear communication to bridge the gap between data and business strategy.`,

    location: 'Wrocław, Poland',
    timezone: 'CET',
    responseTime: 'Within 48 hours',

    contact: {
        email: 'hajiyev.shamkhal@gmail.com',
        phone: '+48 576 086 031',
        linkedin: 'https://linkedin.com/in/shamkhalhajiyev',
        github: 'https://github.com/shamkhalhajiyev',
    },

    languages: [
        { name: 'English', level: 'Fluent', percentage: 95 },
        { name: 'Azerbaijani', level: 'Native', percentage: 100 },
        { name: 'Turkish', level: 'Fluent', percentage: 90 },
        { name: 'Polish', level: 'Basic', percentage: 30 },
    ],

    stats: [
        { label: 'Years of experience', value: '4+' },
        { label: 'Production-grade models', value: '20+' },
        { label: 'Business impact delivered', value: '$4M+' },
    ],

    highlights: [
        {
            title: 'End-to-end ownership',
            description: 'From discovery workshops and experimentation to production deployment and observability in Azure ML.',
            icon: '🧭',
        },
        {
            title: 'Augmented decisioning',
            description: 'Designing analytics that inform high-stakes commercial, marketing, and supply chain decisions.',
            icon: '📈',
        },
        {
            title: 'Enterprise-ready delivery',
            description: 'Robust governance, documentation, and change management embedded into every engagement.',
            icon: '🏛️',
        },
    ],
} as const;

export type Profile = typeof profile;
