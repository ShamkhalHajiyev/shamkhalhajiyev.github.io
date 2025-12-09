/**
 * Skills data with proficiency levels
 * Used for skills matrix visualization with animated bars
 */

export interface Skill {
    name: string;
    proficiency: number; // 0-100
}

export interface SkillCategory {
    name: string;
    icon: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: 'Programming Languages & Tools',
        icon: '💻',
        skills: [
            { name: 'Python', proficiency: 95 },
            { name: 'SQL', proficiency: 90 },
            { name: 'R Programming', proficiency: 75 },
            { name: 'Git', proficiency: 85 },
            { name: 'Docker', proficiency: 80 },
            { name: 'Bash', proficiency: 70 },
        ],
    },
    {
        name: 'Machine Learning & AI',
        icon: '🤖',
        skills: [
            { name: 'Machine Learning', proficiency: 95 },
            { name: 'Deep Learning', proficiency: 85 },
            { name: 'Time Series Forecasting', proficiency: 90 },
            { name: 'Statistics', proficiency: 90 },
            { name: 'Generative AI', proficiency: 75 },
            { name: 'Large Language Models', proficiency: 80 },
        ],
    },
    {
        name: 'Data Engineering & Pipelines',
        icon: '⚙️',
        skills: [
            { name: 'ETL Development', proficiency: 90 },
            { name: 'Feature Engineering', proficiency: 90 },
            { name: 'Data Wrangling', proficiency: 95 },
            { name: 'Airflow', proficiency: 85 },
            { name: 'Luigi', proficiency: 75 },
            { name: 'API Integration', proficiency: 85 },
        ],
    },
    {
        name: 'Big Data & Cloud Services',
        icon: '☁️',
        skills: [
            { name: 'Azure ML', proficiency: 95 },
            { name: 'Azure Databricks', proficiency: 85 },
            { name: 'PySpark', proficiency: 85 },
            { name: 'Microsoft Fabric', proficiency: 70 },
        ],
    },
    {
        name: 'ML Frameworks & Libraries',
        icon: '📚',
        skills: [
            { name: 'Scikit-learn', proficiency: 95 },
            { name: 'XGBoost / LightGBM / CatBoost', proficiency: 90 },
            { name: 'TensorFlow / Keras', proficiency: 80 },
            { name: 'PyTorch', proficiency: 75 },
            { name: 'SHAP', proficiency: 90 },
            { name: 'Polars / Pandas', proficiency: 95 },
        ],
    },
    {
        name: 'Visualization & BI',
        icon: '📊',
        skills: [
            { name: 'Power BI', proficiency: 90 },
            { name: 'Plotly / Dash', proficiency: 85 },
            { name: 'Tableau', proficiency: 70 },
            { name: 'Matplotlib / Seaborn', proficiency: 90 },
        ],
    },
];

export const techStack = [
    { category: 'Languages', items: ['Python', 'R', 'SQL'] },
    { category: 'Cloud & Ops', items: ['Azure ML', 'Databricks', 'Docker'] },
    { category: 'ML Systems', items: ['LLMs', 'MLOps', 'Model Monitoring'] },
    { category: 'Data Engineering', items: ['PySpark', 'Airflow', 'ETL Automation'] },
];
