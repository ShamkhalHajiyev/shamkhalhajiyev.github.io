/**
 * Work experience data
 * Used for career timeline and CV page
 */

export interface Achievement {
    title: string;
    description: string;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | null; // null means "Present"
    description: string;
    achievements: Achievement[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: 'align-technology',
        title: 'Data Science Specialist',
        company: 'Align Technology',
        location: 'Wrocław, Poland',
        startDate: 'Jan 2023',
        endDate: null,
        description: 'Leading data science initiatives and developing advanced ML solutions for business optimization.',
        achievements: [
            {
                title: 'Order Conversion',
                description: 'Designed and deployed an ensemble model in Azure ML (CatBoost, LightGBM, XGBoost) to predict order conversion probability, delivering real-time Power BI insights with SHAP-based interpretability. Built Azure ML model to forecast conversion timelines for accurate sales planning.',
            },
            {
                title: 'Customer Churn Prediction',
                description: 'Developed and deployed a churn prediction system in Azure ML with scalable feature engineering and ensemble modeling, achieving high-accuracy predictions; integrated SHAP explanations and automated reporting for actionable retention insights.',
            },
            {
                title: 'Forecasting Modelling',
                description: 'Designed and deployed LSTM and ARIMA models to generate monthly and quarterly forecasts for feature sales, visualizing real-time results in PowerBI for data-driven decision-making.',
            },
            {
                title: 'Program Performance Analytics',
                description: 'Engineered a high-performance analytics pipeline using Polars and multiprocessing, achieving faster processing of millions of records with 99.9% pipeline uptime. Built advanced k-Nearest Neighbors pipeline in Azure ML with automated KPI calculations enabling performance benchmarking across 19 business metrics.',
            },
        ],
        technologies: ['Python', 'Azure ML', 'Databricks', 'Power BI', 'CatBoost', 'LightGBM', 'XGBoost', 'LSTM', 'ARIMA', 'Polars', 'SHAP'],
    },
    {
        id: 'crisil-irevna',
        title: 'Data Scientist – Research Analyst',
        company: 'CRISIL Irevna Poland Sp z o.o.',
        location: 'Wrocław, Poland',
        startDate: 'Apr 2021',
        endDate: 'Dec 2022',
        description: 'Developed financial analytics solutions and maintained data infrastructure for portfolio risk assessment.',
        achievements: [
            {
                title: 'Web Application Development',
                description: 'Developed and deployed a Dash web application (Python, Docker, MySQL) for portfolio managers to analyze risk exposure, optimize asset allocation, and perform advanced financial analytics.',
            },
            {
                title: 'Database Management',
                description: 'Maintained and optimized a MySQL Server database, leading monthly data updates while ensuring integrity and consistency across financial datasets.',
            },
            {
                title: 'ETL Automation',
                description: 'Automated and streamlined ETL workflows using Airflow, Luigi, Pandas, Polars, and NumPy, improving reliability, scalability, and efficiency of data pipelines.',
            },
        ],
        technologies: ['Python', 'Dash', 'Docker', 'MySQL', 'Airflow', 'Luigi', 'Pandas', 'Polars', 'NumPy'],
    },
];

export const keyAchievements = [
    {
        icon: '📈',
        title: 'Sales Forecasting Excellence',
        description: 'Developed and deployed 90%-accurate sales forecasting models, reducing planning time by 95% and enabling data-driven strategic decisions.',
        metric: '90%+',
        metricLabel: 'Forecast Accuracy',
    },
    {
        icon: '💰',
        title: 'Customer Retention Impact',
        description: 'Built 95%-accurate churn prediction models, improving customer retention by 15% and protecting $2.3M in annual revenue.',
        metric: '$2.3M',
        metricLabel: 'Revenue Protected',
    },
    {
        icon: '⚡',
        title: 'Data Pipeline Optimization',
        description: 'Modernized ETL processes achieving 40% performance improvement and 10x increase in data processing capacity.',
        metric: '10×',
        metricLabel: 'Processing Capacity',
    },
];
