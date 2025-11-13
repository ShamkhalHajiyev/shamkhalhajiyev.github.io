import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero section - Redesigned for a premium, editorial feel
 * Features layered gradients, floating cards, and measured spacing
 */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 1, 0.22, 1] },
    },
  };

  const stats = [
    { label: 'Years of experience', value: '4+' },
    { label: 'Production-grade models', value: '20+' },
    { label: 'Business impact delivered', value: '$4M+' },
  ];

  const highlights = [
    {
      title: 'End-to-end ownership',
      description:
        'From discovery workshops and experimentation to production deployment and observability in Azure ML.',
      icon: '🧭',
    },
    {
      title: 'Augmented decisioning',
      description:
        'Designing analytics that inform high-stakes commercial, marketing, and supply chain decisions.',
      icon: '📈',
    },
    {
      title: 'Enterprise-ready delivery',
      description:
        'Robust governance, documentation, and change management embedded into every engagement.',
      icon: '🏛️',
    },
  ];

  const techStack = [
    { category: 'Languages', items: ['Python', 'R', 'SQL'] },
    { category: 'Cloud & Ops', items: ['Azure ML', 'Databricks', 'Docker'] },
    { category: 'ML Systems', items: ['LLMs', 'MLOps', 'Model Monitoring'] },
    { category: 'Data Engineering', items: ['PySpark', 'Airflow', 'ETL Automation'] },
  ];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="hero-blob top-[-6rem] left-[-4rem]" />
      <div className="hero-blob bottom-[-8rem] right-[-6rem]" />

      <div className="container-custom section-padding relative z-10">
        <motion.div
          className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Primary Content */}
          <motion.div variants={itemVariants} className="space-y-10">
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="gradient-ring">
                <span>Data Science Specialist · Align Technology</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h1>
                Shamkhal Hajiyev
                <span className="block text-[clamp(1.4rem,3vw,1.9rem)] font-medium text-[var(--secondary)]">
                  Elevating decision intelligence with production-ready machine learning
                </span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
                I architect analytical ecosystems that help global teams predict demand, retain customers, and unlock new
                revenue opportunities. My work bridges statistical rigour, human-centred storytelling, and resilient
                engineering.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn btn-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                View flagship work
              </Link>
              <Link href="/#contact" className="btn btn-secondary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9"
                  />
                </svg>
                Schedule a conversation
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Secondary Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="floating-card space-y-5"
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl">Trusted for strategic delivery</h3>
              <div className="space-y-4">
                {highlights.map((highlight) => (
                  <div key={highlight.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--muted)] text-lg">
                      {highlight.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--foreground)] mb-1">{highlight.title}</p>
                      <p className="text-sm leading-relaxed text-[var(--secondary)] mb-0">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="floating-card"
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg">Tooling I deploy with confidence</h3>
                <span className="text-xs font-semibold tracking-[0.2em] text-[var(--secondary)] uppercase">Tech Stack</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techStack.map((tech) => (
                  <div key={tech.category} className="rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)] mb-2">
                      {tech.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <span key={item} className="chip text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-photo">
        <Image src="/profile.svg" alt="Portrait of Shamkhal Hajiyev" width={640} height={820} priority />
        <div className="caption">Align Technology · Strategic analytics leader</div>
      </div>
    </div>
  </section>
);

export default Hero;
