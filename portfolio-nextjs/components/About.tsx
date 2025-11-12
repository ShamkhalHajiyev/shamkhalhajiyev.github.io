'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * About section - Professional summary and background
 * Features animated fade-in on scroll
 */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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
    <section ref={ref} className="section-padding bg-[var(--background)]">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="mb-4">Professional Summary</h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-[var(--secondary)] leading-relaxed">
            <p className="text-base md:text-lg">
              Results-oriented <strong className="text-[var(--foreground)]">Data Scientist & Machine Learning Engineer</strong> with expertise in
              delivering end-to-end data science solutions across predictive modeling, time series forecasting,
              and advanced analytics. Skilled in <strong className="text-[var(--foreground)]">Python, SQL, and cloud-based platforms</strong> (Azure ML,
              Databricks, PySpark), with a strong background in Statistics and Machine Learning.
            </p>

            <p className="text-base md:text-lg">
              Proven expertise in <strong className="text-[var(--foreground)]">designing and deploying scalable ML pipelines</strong>, automating ETL
              workflows with Airflow, and integrating models into real-time business applications. Adept at combining
              data engineering, model development, and interpretability techniques (e.g., SHAP) to generate
              actionable insights that support strategic decision-making.
            </p>

            <p className="text-base md:text-lg">
              Collaborative and agile professional with experience in <strong className="text-[var(--foreground)]">cross-functional teamwork, stakeholder
              communication, and mentoring</strong>, passionate about applying data science to solve complex problems
              and drive innovation in dynamic business environments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
