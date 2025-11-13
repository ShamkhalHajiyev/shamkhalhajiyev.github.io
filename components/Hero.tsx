import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '4+ years', label: 'End-to-end data science delivery' },
  { value: '95%+', label: 'Forecasting & churn model accuracy' },
  { value: '$2.3M', label: 'Annual revenue protected' },
] as const;

const Hero: FC = () => (
  <section className="page-section">
    <div className="container-custom hero-layout">
      <div className="hero-copy">
        <span className="eyebrow">Data Scientist &amp; Machine Learning Engineer</span>
        <h1>Building analytical products that move enterprise metrics</h1>
        <p>
          I help global teams translate complex datasets into confident decisions. From predictive modelling and churn
          analytics to production-grade pipelines in Azure ML and Databricks, I partner with stakeholders to ship
          measurable business outcomes.
        </p>
        <div className="hero-meta">
          <span className="location">Based in Wrocław, Poland</span>
          <div className="btn-row">
            <Link href="/#contact" className="button-primary">
              Let&apos;s collaborate
            </Link>
            <Link href="/cv" className="button-secondary">
              View full CV
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <div className="value">{stat.value}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-photo">
        <Image src="/profile.svg" alt="Portrait of Shamkhal Hajiyev" width={640} height={820} priority />
        <div className="caption">Align Technology · Strategic analytics leader</div>
      </div>
    </div>
  </section>
);

export default Hero;
