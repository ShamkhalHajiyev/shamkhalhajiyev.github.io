'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Core Expertise section - Displays key skill areas in card format
 * Features animated cards with hover effects
 */
export default function CoreExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const expertiseAreas = [
    {
      title: 'Data Science & ML',
      description: 'Expert in Statistics, Machine Learning, Deep Learning, Time Series Forecasting, Generative AI, and Large Language Models',
      skills: [
        'Statistics & Hypothesis Testing',
        'Supervised & Unsupervised Learning',
        'Deep Learning & Neural Networks',
        'Time Series Forecasting (LSTM, ARIMA)',
        'Generative AI & LLMs',
        'Model Interpretability (SHAP)',
      ],
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and visualization expertise for data-driven decision making',
      skills: [
        'Power BI & Advanced DAX',
        'Real-time Dashboard Development',
        'KPI Design & Monitoring',
        'Predictive Analytics',
        'Business Metrics Optimization',
        'Stakeholder Reporting',
      ],
    },
    {
      title: 'Data Engineering & Automation',
      description: 'Building robust data pipelines and automating workflows for scalable solutions',
      skills: [
        'ETL Development & Optimization',
        'Workflow Automation (Airflow, Luigi)',
        'Azure ML & Databricks',
        'PySpark & Big Data Processing',
        'API Integration & Development',
        'Cloud Infrastructure (Azure)',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="section-padding bg-[var(--card-bg)]">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="text-center mb-12">
            <h2 className="mb-4">Core Expertise</h2>
            <p className="text-[var(--secondary)] text-lg">Professional skills and technical capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="card group cursor-default"
              >
                <h3 className="mb-3 text-[var(--primary)]">{area.title}</h3>
                <p className="text-sm text-[var(--secondary)] mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start text-sm text-[var(--secondary)]">
                      <svg
                        className="w-5 h-5 mr-2 text-[var(--primary)] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
