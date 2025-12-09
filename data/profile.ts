/**
 * Centralized profile data for the portfolio
 * Single source of truth for personal information, taglines, and contact details
 */

export const profile = {
    name: 'Shamkhal Hajiyev',
    title: 'Data Scientist | Machine Learning Engineer',
    currentRole: 'Data Science Specialist',
    currentCompany: 'Align Technology',

    tagline: 'Elevating decision intelligence with production-ready machine learning',

    bio: `I architect analytical ecosystems that help global teams predict demand, retain customers, and unlock new revenue opportunities. My work bridges statistical rigour, human-centred storytelling, and resilient engineering.`,

    extendedBio: `Results-oriented Data Scientist & Machine Learning Engineer with 4+ years of experience in delivering end-to-end data science solutions across predictive modeling, time series forecasting, and advanced analytics. Skilled in Python, SQL, and cloud-based platforms (Azure ML, Databricks, PySpark), with a strong background in Statistics and Machine Learning.

Proven expertise in designing and deploying scalable ML pipelines, automating ETL workflows with Airflow, and integrating models into real-time business applications. Adept at combining data engineering, model development, and interpretability techniques (e.g., SHAP) to generate actionable insights that support strategic decision-making.

Collaborative and agile professional with experience in cross-functional teamwork, stakeholder communication, and mentoring, passionate about applying data science to solve complex problems and drive innovation in dynamic business environments.`,

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
