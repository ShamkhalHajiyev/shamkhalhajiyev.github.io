/**
 * Unified project data
 * Combines professional projects, GitHub repos, and personal experiments
 */

export type ProjectCategory = 'professional' | 'github' | 'personal';
export type ProjectDomain = 'ml' | 'data-engineering' | 'analytics' | 'web';

export interface ProjectMetric {
    label: string;
    value: string;
}

export interface Project {
    id: string;
    title: string;
    focus: string;
    description: string;
    longDescription?: string;
    category: ProjectCategory;
    domains: ProjectDomain[];
    metrics: ProjectMetric[];
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    image?: string;
}

export const projects: Project[] = [
    // Professional Projects
    {
        id: 'sales-forecasting',
        title: 'Sales Forecasting Platform',
        focus: 'Predictive analytics pipeline',
        description: 'Built Azure ML forecasting workflows (LSTM, ARIMA) with Power BI delivery to reduce planning cycles by 95% while sustaining 90%+ accuracy.',
        longDescription: `Designed and implemented an end-to-end sales forecasting system that combines classical time series methods (ARIMA, Exponential Smoothing) with deep learning approaches (LSTM networks) to generate accurate monthly and quarterly sales predictions.

The system processes historical sales data, market indicators, and seasonal patterns to produce probabilistic forecasts with confidence intervals. Results are automatically delivered to stakeholders via Power BI dashboards with drill-down capabilities.

Key technical achievements include automated feature engineering, hyperparameter tuning via Bayesian optimization, and model performance monitoring with automated retraining triggers.`,
        category: 'professional',
        domains: ['ml', 'analytics'],
        metrics: [
            { label: 'Forecast accuracy', value: '90%+' },
            { label: 'Planning time saved', value: '95%' },
            { label: 'Users supported', value: '50+' },
        ],
        technologies: ['Python', 'Azure ML', 'Databricks', 'Power BI', 'LSTM', 'ARIMA'],
        featured: true,
    },
    {
        id: 'churn-prediction',
        title: 'Churn Prediction Engine',
        focus: 'Customer retention system',
        description: 'Deployed interpretable ensemble scoring with SHAP storytelling to uplift retention by 15% and protect $2.3M in annual revenue.',
        longDescription: `Built a production-grade customer churn prediction system using ensemble machine learning methods (XGBoost, CatBoost, LightGBM) with integrated model interpretability via SHAP values.

The system scores customers daily, identifies at-risk segments, and generates automated retention recommendations. SHAP-based explanations are surfaced in Power BI to help retention teams understand why specific customers are flagged.

Impact was measured through controlled experiments, demonstrating a 15% improvement in customer retention rates and protecting $2.3M in annual recurring revenue.`,
        category: 'professional',
        domains: ['ml', 'analytics'],
        metrics: [
            { label: 'Model accuracy', value: '95%' },
            { label: 'Revenue protected', value: '$2.3M' },
            { label: 'Retention uplift', value: '+15%' },
        ],
        technologies: ['XGBoost', 'CatBoost', 'LightGBM', 'Azure ML', 'Power BI', 'SHAP'],
        featured: true,
    },
    {
        id: 'analytics-control-tower',
        title: 'Analytics Control Tower',
        focus: 'Program performance intelligence',
        description: 'Engineered Polars-powered ingestion and KPI automation with 99.9% uptime to benchmark 19+ metrics across global programs.',
        longDescription: `Designed and built a high-performance analytics infrastructure for monitoring program performance across 19 business KPIs. The system processes millions of records daily using Polars for efficient data manipulation.

Key features include automated KPI calculations, anomaly detection, trend analysis, and executive dashboards. The pipeline maintains 99.9% uptime through robust error handling, monitoring, and automated recovery mechanisms.`,
        category: 'professional',
        domains: ['data-engineering', 'analytics'],
        metrics: [
            { label: 'Pipeline uptime', value: '99.9%' },
            { label: 'Processing gain', value: '+40%' },
            { label: 'Data capacity', value: '10×' },
        ],
        technologies: ['Polars', 'Python', 'REST APIs', 'Power BI', 'Azure ML'],
        featured: true,
    },
    {
        id: 'logistics-optimization',
        title: 'Logistics Optimisation Suite',
        focus: 'Supply chain analytics',
        description: 'Created pricing elasticity, route optimisation, and anomaly detection models to enhance margins and SLA reliability for international logistics.',
        category: 'professional',
        domains: ['analytics', 'ml'],
        metrics: [
            { label: 'Lead engagement', value: '2×' },
            { label: 'SLA risk alerts', value: 'Real-time' },
            { label: 'Stakeholders trained', value: '30+' },
        ],
        technologies: ['Python', 'Tableau', 'Airflow', 'SQL'],
        featured: false,
    },
    // GitHub Projects
    {
        id: 'churn-prediction-project',
        title: 'Churn Prediction Project',
        focus: 'End-to-end ML portfolio project',
        description: 'End-to-end churn prediction system for digital bank demonstrating ML portfolio best practices.',
        category: 'github',
        domains: ['ml'],
        metrics: [
            { label: 'Language', value: 'Jupyter' },
            { label: 'Updated', value: '2025' },
        ],
        technologies: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas'],
        githubUrl: 'https://github.com/ShamkhalHajiyev/churn-prediction-project',
        featured: false,
    },
    {
        id: 'supply-chain-ml',
        title: 'Supply Chain ML Project',
        focus: 'Delivery delay prediction',
        description: 'End-to-end supply chain ML project predicting delivery delays with production-grade code structure.',
        category: 'github',
        domains: ['ml', 'data-engineering'],
        metrics: [
            { label: 'Language', value: 'Jupyter' },
            { label: 'Updated', value: '2025' },
        ],
        technologies: ['Python', 'Jupyter', 'Machine Learning'],
        githubUrl: 'https://github.com/ShamkhalHajiyev/supply-chain-ml-project',
        featured: false,
    },
    {
        id: 'adthena-pricebasket',
        title: 'PriceBasket Exercise',
        focus: 'Technical assessment',
        description: 'Program driven by unit tests that can price a basket of products taking into account special offers, demonstrating clean extendible code.',
        category: 'github',
        domains: ['data-engineering'],
        metrics: [
            { label: 'Language', value: 'Python' },
            { label: 'License', value: 'MIT' },
        ],
        technologies: ['Python', 'Unit Testing', 'OOP'],
        githubUrl: 'https://github.com/ShamkhalHajiyev/Adthena-PriceBasket-Exercise',
        featured: false,
    },
    {
        id: 'covid19-visualization',
        title: 'COVID-19 Visualization',
        focus: 'Interactive data visualization',
        description: 'R Shiny application for COVID-19 data visualization with interactive charts and maps.',
        category: 'github',
        domains: ['analytics', 'web'],
        metrics: [
            { label: 'Language', value: 'R' },
            { label: 'Type', value: 'Shiny App' },
        ],
        technologies: ['R', 'Shiny', 'ggplot2', 'Data Visualization'],
        githubUrl: 'https://github.com/ShamkhalHajiyev/Shiny-App-COVID-19-Visualization',
        featured: false,
    },
];

export const projectFilters = [
    { id: 'all', label: 'All work' },
    { id: 'ml', label: 'Machine learning' },
    { id: 'data-engineering', label: 'Data engineering' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'professional', label: 'Professional' },
    { id: 'github', label: 'Open source' },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: ProjectCategory) => projects.filter(p => p.category === category);
export const getProjectsByDomain = (domain: ProjectDomain) => projects.filter(p => p.domains.includes(domain));
