/**
 * Professional certifications data
 * Used for About page and CV
 */

export interface Certification {
    title: string;
    code: string;
    issuer: string;
    description: string;
    icon?: string;
}

export const certifications: Certification[] = [
    {
        title: 'Azure Data Scientist Associate',
        code: 'DP-100',
        issuer: 'Microsoft',
        description: 'Advanced machine learning and data science on Azure',
        icon: '🏆',
    },
    {
        title: 'Machine Learning Specialization',
        code: '',
        issuer: 'DeepLearning.AI',
        description: 'Comprehensive machine learning fundamentals and advanced techniques',
        icon: '🎓',
    },
    {
        title: 'Azure AI Fundamentals',
        code: 'AI-900',
        issuer: 'Microsoft',
        description: 'Artificial intelligence and machine learning concepts',
        icon: '🤖',
    },
    {
        title: 'Azure Data Fundamentals',
        code: 'DP-900',
        issuer: 'Microsoft',
        description: 'Core data concepts and Azure data services',
        icon: '📊',
    },
    {
        title: 'Azure Fundamentals',
        code: 'AZ-900',
        issuer: 'Microsoft',
        description: 'Core Azure services and cloud concepts',
        icon: '☁️',
    },
];
