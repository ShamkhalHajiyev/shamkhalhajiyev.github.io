'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Projects Page - Showcase of professional projects
 * Features filtering by category and animated project cards
 */
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'analytics', label: 'Business Analytics' },
    { id: 'automation', label: 'Process Automation' },
  ];

  const projects = [
    {
      title: 'Predictive Sales Forecasting System',
      description: 'End-to-end automated sales forecasting pipeline with real-time Power BI integration, enabling data-driven strategic planning and resource allocation.',
      categories: ['ml', 'analytics', 'automation'],
      status: 'Production',
      impact: [
        '90% forecast accuracy (vs. 65% manual baseline)',
        '95% reduction in forecasting time',
        'Real-time insights for 50+ sales team members',
      ],
      technical: [
        'Time series models (Prophet, SARIMA)',
        'Azure Data Lake + Power BI integration',
        'Automated monthly retraining pipeline',
      ],
      technologies: ['Python', 'Prophet', 'Power BI', 'Azure ML', 'REST APIs'],
      duration: '8 months',
      team: '3 people',
    },
    {
      title: 'Customer Churn Prediction Engine',
      description: 'ML-powered churn detection system providing real-time risk scoring and actionable retention recommendations for sales teams.',
      categories: ['ml', 'analytics'],
      status: 'Production',
      impact: [
        '95% model accuracy (AUC-ROC: 0.94)',
        '15% improvement in customer retention',
        '$2.3M annual revenue protection',
      ],
      technical: [
        'Gradient Boosting (XGBoost) classifier',
        'Feature engineering pipeline (150+ features)',
        'Real-time Power BI dashboard integration',
      ],
      technologies: ['XGBoost', 'Feature Engineering', 'Azure ML', 'Power BI', 'MLOps'],
      duration: '6 months',
      team: '2 people',
    },
    {
      title: 'Power BI x Azure Data Lake Framework',
      description: 'Scalable data integration framework connecting Power BI with Azure Data Lake, optimized for large-scale KPI calculations and real-time analytics.',
      categories: ['data-engineering', 'automation'],
      status: 'Production',
      impact: [
        '40% improvement in data processing speed',
        '10x increase in data volume capacity',
        'Reusable framework for 5+ business units',
      ],
      technical: [
        'Polars-based data processing engine',
        'REST API integration layer',
        'Multiprocessing optimization',
      ],
      technologies: ['Polars', 'REST APIs', 'Azure Data Lake', 'Multiprocessing', 'Python'],
      duration: '4 months',
      team: '2 people',
    },
    {
      title: 'Portfolio Risk Assessment Platform',
      description: 'Interactive financial analytics platform for portfolio risk assessment, asset allocation optimization, and real-time risk monitoring.',
      categories: ['analytics', 'data-engineering'],
      status: 'Completed',
      impact: [
        'Real-time risk monitoring for $50M+ portfolios',
        'Interactive asset allocation optimization',
        'Client-facing analytics dashboard',
      ],
      technical: [
        'Risk metrics calculation engine',
        'MySQL data warehouse',
        'Docker containerization',
      ],
      technologies: ['Python', 'Dash', 'Docker', 'MySQL', 'Financial Analytics'],
      duration: '5 months',
      team: '3 people',
    },
    {
      title: 'Customer Segmentation & Targeting',
      description: 'Unsupervised learning system for customer segmentation, enabling targeted marketing campaigns and personalized product recommendations.',
      categories: ['ml', 'analytics'],
      status: 'Production',
      impact: [
        '8 distinct customer segments identified',
        '25% improvement in campaign conversion rates',
        '$1.8M additional revenue from targeted campaigns',
      ],
      technical: [
        'K-means clustering algorithm',
        'Behavioral & transactional features',
        'Monthly segmentation updates',
      ],
      technologies: ['Scikit-learn', 'Clustering', 'Feature Engineering', 'Power BI', 'Python'],
      duration: '3 months',
      team: '2 people',
    },
    {
      title: 'ETL Pipeline Modernization',
      description: 'Modernized legacy ETL processes using Python and Luigi, improving data reliability, processing speed, and monitoring capabilities.',
      categories: ['data-engineering', 'automation'],
      status: 'Production',
      impact: [
        '60% reduction in processing time',
        '99.9% data quality improvement',
        'Real-time pipeline monitoring',
      ],
      technical: [
        'Luigi workflow orchestration',
        'MySQL optimization & indexing',
        'Data quality monitoring',
      ],
      technologies: ['Python', 'Luigi', 'MySQL', 'Pandas', 'ETL'],
      duration: '4 months',
      team: '2 people',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.categories.includes(activeFilter)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="mb-4">Portfolio Projects</h1>
            <p className="text-lg text-[var(--secondary)] max-w-2xl mx-auto">
              Real-world solutions delivering measurable business impact
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Privacy Notice */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="card bg-[var(--primary)]/5 border-[var(--primary)]/20">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 text-[var(--primary)] flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--foreground)] mb-1">Privacy Notice</p>
                  <p className="text-sm text-[var(--secondary)]">
                    The projects showcased here are work-related and contain confidential business information. While I
                    can share the business impact and technical approach, detailed implementation code and internal
                    documentation cannot be made public due to company privacy policies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
                className="card h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl">{project.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Production'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--secondary)] mb-4">{project.description}</p>

                {/* Business Impact */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--primary)] mb-2">Business Impact:</h4>
                  <ul className="space-y-1">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-[var(--secondary)]">
                        <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Implementation */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--primary)] mb-2">Technical Implementation:</h4>
                  <ul className="space-y-1">
                    {project.technical.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-[var(--secondary)]">
                        <svg className="w-4 h-4 mr-2 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--primary)] mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[var(--primary)]/10 rounded text-xs text-[var(--foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-xs text-[var(--secondary)] mt-auto pt-4 border-t border-[var(--border)]">
                  <span>Duration: {project.duration} | Team: {project.team}</span>
                  <span className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Confidential
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="card text-center py-8">
              <h3 className="mb-3">Interested in Collaboration?</h3>
              <p className="text-[var(--secondary)] mb-6">
                I'm always open to discussing new opportunities, interesting problems, or potential collaborations.
              </p>
              <a href="mailto:hajiyev.shamkhal@gmail.com" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
