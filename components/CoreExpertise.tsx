'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Core Expertise section - Structured capability grid
 * Highlights core domains with clarity and modern micro-interactions
 */
export default function CoreExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.18, 0.89, 0.32, 1.28] },
    },
  };

  const expertiseAreas = [
    {
      icon: '🤖',
      title: 'Predictive Data Science',
      descriptor: 'Intelligent models with measurable ROI',
      description:
        'Design and deploy statistical and deep learning systems that forecast demand, score churn, and prioritise opportunities.',
      focus: ['Forecasting & time series', 'Experiment design & uplift modelling', 'ML interpretability with SHAP'],
      tooling: ['CatBoost', 'LightGBM', 'Prophet', 'PyTorch'],
    },
    {
      icon: '📊',
      title: 'Decision Intelligence',
      descriptor: 'Analytics that inspire confident action',
      description:
        'Blend BI craftsmanship with ML insights to surface clear stories, KPIs, and strategic recommendations for leadership.',
      focus: ['Executive dashboards', 'Scenario planning', 'Segmentation & persona design'],
      tooling: ['Power BI', 'dbt', 'Azure Data Explorer'],
    },
    {
      icon: '⚙️',
      title: 'Data Engineering & MLOps',
      descriptor: 'Scalable foundations for every model',
      description:
        'Engineer data products, orchestrate pipelines, and automate model lifecycles so solutions remain resilient in production.',
      focus: ['Feature store design', 'Automated retraining', 'API + microservice deployment'],
      tooling: ['Azure ML', 'Databricks', 'Airflow', 'Docker'],
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-[var(--background-soft)]/40">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={cardVariants} className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="section-eyebrow">Core Expertise</span>
            <h2>Where strategy, science, and engineering intersect</h2>
            <p className="text-lg text-[var(--secondary)]">
              Each engagement is grounded in disciplined experimentation, transparent communication, and production-grade craft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={cardVariants}
                transition={{ delay: 0.08 * index }}
                className="card flex flex-col gap-6 h-full"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--muted)] text-2xl">
                    {area.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)] mb-1">
                      {area.descriptor}
                    </p>
                    <h3 className="text-xl leading-tight">{area.title}</h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[var(--secondary)] mb-0">{area.description}</p>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Key Focus</p>
                  <ul className="space-y-2">
                    {area.focus.map((focusItem) => (
                      <li key={focusItem} className="flex items-start gap-2 text-sm text-[var(--secondary)]">
                        <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-secondary)]" />
                        <span>{focusItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-dashed border-[var(--border)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--secondary)] mb-2">
                    Trusted Toolset
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.tooling.map((tool) => (
                      <span key={tool} className="chip text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="page-section" style={{ paddingTop: '4rem', paddingBottom: '0' }}>
          <div className="content-card highlighted">
            <h3>Certifications</h3>
            <div className="pill-list">
              {certifications.map((cert) => (
                <span key={cert} className="pill">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
