'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * About section - Editorial narrative with supporting cards
 * Introduces philosophy, delivery style, and operating principles
 */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const expertiseHighlights = [
    {
      title: 'Cross-functional leadership',
      copy:
        'Partnering with commercial, marketing, finance, and product teams to uncover leverage points and translate analytics into rapid wins.',
      meta: 'Stakeholder-first',
    },
    {
      title: 'Operational excellence',
      copy:
        'Designing pipelines, feature stores, and QA rituals that keep models trustworthy—supported by observability and documentation.',
      meta: 'Reliable delivery',
    },
    {
      title: 'Storytelling with rigour',
      copy:
        'Distilling complex experimentation into persuasive narratives that influence executives and empower domain experts.',
      meta: 'Executive-ready',
    },
  ];

  const signatureApproach = [
    'Advance from exploratory notebooks to hardened APIs with DevOps discipline.',
    'Blend classical statistics with cutting-edge deep learning and LLM tooling when it materially elevates performance.',
    'Co-create with business stakeholders to ensure adoption, not just technical success.',
  ];

  return (
    <section ref={ref} className="relative bg-[var(--card-bg)]/30 section-padding">
      <div className="container-custom">
        <motion.div
          className="grid gap-16 xl:gap-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="space-y-6">
              <span className="section-eyebrow">About</span>
              <h2>Human-centred data science with enterprise craft</h2>
              <p className="text-lg leading-relaxed text-[var(--secondary)]">
                I specialise in translating messy, multi-market data into resilient intelligence systems. Every build is
                anchored in measurable impact, from improving demand forecasts to unlocking new product insights.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/60 p-6 md:p-8">
              <h3 className="text-xl mb-5">What this means in practice</h3>
              <ul className="space-y-5 text-base leading-relaxed">
                {signatureApproach.map((item) => (
                  <li key={item} className="flex gap-4">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--accent-secondary)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            {expertiseHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                transition={{ delay: 0.1 * index }}
                className="floating-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--secondary)]">
                    {highlight.meta}
                  </span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-secondary)]" />
                </div>
                <h3 className="text-lg mb-3">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--secondary)] mb-0">{highlight.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
