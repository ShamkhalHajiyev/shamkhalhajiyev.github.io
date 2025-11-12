'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Hero section - First section on the homepage
 * Features animated heading, description, and call-to-action buttons
 */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const techStack = [
    { category: 'Languages', items: ['Python', 'R', 'SQL'], icon: '💻' },
    { category: 'Cloud & Tools', items: ['Azure ML', 'Databricks', 'Docker', 'Git'], icon: '☁️' },
    { category: 'ML/AI', items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs'], icon: '🤖' },
    { category: 'Data Engineering', items: ['PySpark', 'ETL', 'Airflow', 'API Integration'], icon: '⚙️' },
  ];

  return (
    <section className="min-h-[90vh] flex items-center section-padding bg-[var(--background)]">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div>
            <motion.h1 variants={itemVariants} className="mb-4">
              Shamkhal Hajiyev
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mb-2">
                Data Scientist | Machine Learning Engineer
              </h2>
              <div className="inline-flex items-center px-4 py-2 bg-[var(--primary)]/10 rounded-lg">
                <svg
                  className="w-5 h-5 mr-2 text-[var(--primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-sm font-medium text-[var(--foreground)]">Align Technology</span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-[var(--secondary)] mb-8 leading-relaxed">
              Results-oriented Data Scientist & Machine Learning Engineer with <strong>4+ years of experience</strong>{' '}
              delivering end-to-end data science solutions across predictive modeling, time series forecasting, and
              advanced analytics. Skilled in Python, SQL, and cloud platforms (Azure ML, Databricks, PySpark) with
              proven expertise in designing scalable ML pipelines, automating ETL workflows, and integrating models into
              real-time business applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/cv" className="btn btn-primary">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                View CV
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                See Projects
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Tech Stack */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <div className="card p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"></div>
                <h3 className="text-lg font-bold text-center">Technology Stack</h3>
                <div className="w-8 h-1 bg-gradient-to-l from-[var(--primary)] to-[var(--accent)] rounded-full"></div>
              </div>
              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.category}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{tech.icon}</span>
                      <h4 className="text-xs font-semibold text-[var(--secondary)] uppercase tracking-wider">
                        {tech.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <span key={item} className="chip text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
