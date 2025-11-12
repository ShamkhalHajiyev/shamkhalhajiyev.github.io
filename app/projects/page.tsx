'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Projects Page - Modern professional showcase
 * Features scannable cards, visual hierarchy, and filtering
 */
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: '📊 All Projects', count: 6 },
    { id: 'ml', label: '🤖 Machine Learning', count: 3 },
    { id: 'data-engineering', label: '⚙️ Data Engineering', count: 3 },
    { id: 'analytics', label: '📈 Analytics', count: 4 },
  ];

  const projects = [
    {
      title: 'Sales Forecasting System',
      subtitle: 'Predictive Analytics Pipeline',
      description: 'Automated sales forecasting with real-time Power BI integration for strategic planning.',
      categories: ['ml', 'analytics'],
      status: 'Production',
      impact: {
        accuracy: '90%',
        efficiency: '95% faster',
        users: '50+ team members'
      },
      keyMetrics: [
        { label: 'Forecast Accuracy', value: '90%', improvement: '+25% vs baseline' },
        { label: 'Time Saved', value: '95%', improvement: 'planning time reduction' },
        { label: 'User Adoption', value: '50+', improvement: 'sales team members' }
      ],
      technologies: ['Python', 'Prophet', 'Power BI', 'Azure ML', 'REST APIs'],
      duration: '8 months',
      team: '3',
    },
    {
      title: 'Churn Prediction Engine',
      subtitle: 'Customer Retention System',
      description: 'ML-powered risk scoring delivering actionable retention insights.',
      categories: ['ml', 'analytics'],
      status: 'Production',
      impact: {
        accuracy: '95%',
        retention: '+15%',
        revenue: '$2.3M protected'
      },
      keyMetrics: [
        { label: 'Model Accuracy', value: '95%', improvement: 'AUC-ROC: 0.94' },
        { label: 'Retention Lift', value: '+15%', improvement: 'customer retention' },
        { label: 'Revenue Impact', value: '$2.3M', improvement: 'annual protection' }
      ],
      technologies: ['XGBoost', 'Azure ML', 'Power BI', 'SHAP', 'MLOps'],
      duration: '6 months',
      team: '2',
    },
    {
      title: 'Data Lake Integration',
      subtitle: 'Power BI Analytics Framework',
      description: 'Scalable integration framework for large-scale KPI calculations.',
      categories: ['data-engineering'],
      status: 'Production',
      impact: {
        performance: '+40%',
        capacity: '10x',
        reusability: '5+ units'
      },
      keyMetrics: [
        { label: 'Processing Speed', value: '+40%', improvement: 'faster execution' },
        { label: 'Data Capacity', value: '10x', improvement: 'volume increase' },
        { label: 'Adoption', value: '5+', improvement: 'business units' }
      ],
      technologies: ['Polars', 'REST APIs', 'Azure Data Lake', 'Python'],
      duration: '4 months',
      team: '2',
    },
    {
      title: 'Risk Assessment Platform',
      subtitle: 'Portfolio Analytics System',
      description: 'Real-time risk monitoring and asset allocation optimization.',
      categories: ['analytics', 'data-engineering'],
      status: 'Completed',
      impact: {
        portfolio: '$50M+',
        features: 'Real-time',
        delivery: 'Client-facing'
      },
      keyMetrics: [
        { label: 'Portfolio Size', value: '$50M+', improvement: 'under management' },
        { label: 'Processing', value: 'Real-time', improvement: 'risk monitoring' },
        { label: 'Interface', value: 'Client', improvement: 'analytics dashboard' }
      ],
      technologies: ['Python', 'Dash', 'Docker', 'MySQL', 'FinTech'],
      duration: '5 months',
      team: '3',
    },
    {
      title: 'Customer Segmentation',
      subtitle: 'ML-Driven Targeting System',
      description: 'Unsupervised learning for personalized marketing campaigns.',
      categories: ['ml', 'analytics'],
      status: 'Production',
      impact: {
        segments: '8',
        conversion: '+25%',
        revenue: '$1.8M'
      },
      keyMetrics: [
        { label: 'Segments', value: '8', improvement: 'distinct clusters' },
        { label: 'Conversion', value: '+25%', improvement: 'campaign performance' },
        { label: 'Revenue', value: '$1.8M', improvement: 'additional income' }
      ],
      technologies: ['Scikit-learn', 'K-means', 'Power BI', 'Python'],
      duration: '3 months',
      team: '2',
    },
    {
      title: 'ETL Pipeline Modernization',
      subtitle: 'Data Infrastructure Upgrade',
      description: 'Legacy system modernization with automated monitoring.',
      categories: ['data-engineering'],
      status: 'Production',
      impact: {
        speed: '+60%',
        quality: '99.9%',
        monitoring: 'Real-time'
      },
      keyMetrics: [
        { label: 'Processing Time', value: '-60%', improvement: 'faster execution' },
        { label: 'Data Quality', value: '99.9%', improvement: 'pipeline uptime' },
        { label: 'Monitoring', value: 'Real-time', improvement: 'visibility' }
      ],
      technologies: ['Python', 'Luigi', 'MySQL', 'Pandas', 'ETL'],
      duration: '4 months',
      team: '2',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.categories.includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container-custom section-padding">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h1 className="section-title">Portfolio Projects</h1>
          <p className="section-subtitle">
            Real-world data science solutions delivering measurable business impact across ML, analytics, and data engineering domains.
          </p>
        </motion.div>

        {/* Confidentiality Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 border border-blue-200/50 dark:border-blue-800/50">
            <div className="icon-wrapper">
              <svg className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--foreground)] mb-1">Project Confidentiality</h4>
              <p className="text-sm text-[var(--secondary)] leading-relaxed">
                All projects are from professional work. Metrics and outcomes reflect real commercial impact.
                Implementation details are high-level due to confidentiality agreements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
              <span className="ml-2 text-xs opacity-75">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
              className="project-card group"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent)]">{project.subtitle}</p>
                </div>
                <span className={`badge ml-3 ${project.status === 'Production' ? 'badge-success' : 'badge-primary'}`}>
                  {project.status === 'Production' ? '🚀 Live' : '✅ Done'}
                </span>
              </div>

              {/* Description */}
              <p className="text-[var(--secondary)] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Metrics */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider mb-4 flex items-center">
                  <span className="w-8 h-1 bg-[var(--accent)] rounded mr-3"></span>
                  Impact Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {project.keyMetrics.map((metric, i) => (
                    <div key={i} className="text-center p-3 rounded-lg bg-[var(--muted)] border border-[var(--border)]">
                      <div className="text-2xl font-bold text-[var(--accent)] mb-1">{metric.value}</div>
                      <div className="text-xs text-[var(--secondary)] leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[var(--secondary)] uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Metadata */}
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-[var(--border)]">
                <div className="flex items-center gap-4 text-xs text-[var(--secondary)]">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {project.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Team of {project.team}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 border border-[var(--border)]">
            <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
              Let's Build Something Amazing
            </h3>
            <p className="text-[var(--secondary)] mb-6 max-w-2xl mx-auto">
              Open to discussing data science opportunities, challenging problems, and collaborative projects.
            </p>
            <a href="mailto:hajiyev.shamkhal@gmail.com" className="btn btn-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
