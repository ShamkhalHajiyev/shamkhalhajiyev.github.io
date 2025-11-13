'use client';

import { useMemo, useState } from 'react';

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'ml', label: 'Machine learning' },
  { id: 'data-engineering', label: 'Data engineering' },
  { id: 'analytics', label: 'Analytics' },
];

const projects = [
  {
    title: 'Sales forecasting platform',
    focus: 'Predictive analytics pipeline',
    description:
      'Built Azure ML forecasting workflows (LSTM, ARIMA) with Power BI delivery to reduce planning cycles by 95% while sustaining 90%+ accuracy.',
    categories: ['ml', 'analytics'],
    metrics: [
      { label: 'Forecast accuracy', value: '90%+' },
      { label: 'Planning time saved', value: '95%' },
      { label: 'Users supported', value: '50+' },
    ],
    tools: ['Python', 'Azure ML', 'Databricks', 'Power BI'],
  },
  {
    title: 'Churn prediction engine',
    focus: 'Customer retention system',
    description:
      'Deployed interpretable ensemble scoring with SHAP storytelling to uplift retention by 15% and protect $2.3M in annual revenue.',
    categories: ['ml', 'analytics'],
    metrics: [
      { label: 'Model accuracy', value: '95%' },
      { label: 'Revenue protected', value: '$2.3M' },
      { label: 'Retention uplift', value: '+15%' },
    ],
    tools: ['XGBoost', 'CatBoost', 'Azure ML', 'Power BI'],
  },
  {
    title: 'Analytics control tower',
    focus: 'Program performance intelligence',
    description:
      'Engineered Polars-powered ingestion and KPI automation with 99.9% uptime to benchmark 19+ metrics across global programs.',
    categories: ['data-engineering', 'analytics'],
    metrics: [
      { label: 'Pipeline uptime', value: '99.9%' },
      { label: 'Processing gain', value: '+40%' },
      { label: 'Data capacity', value: '10×' },
    ],
    tools: ['Polars', 'Python', 'REST APIs', 'Power BI'],
  },
  {
    title: 'Logistics optimisation suite',
    focus: 'Supply chain analytics',
    description:
      'Created pricing elasticity, route optimisation, and anomaly detection models to enhance margins and SLA reliability for international logistics.',
    categories: ['analytics', 'ml'],
    metrics: [
      { label: 'Lead engagement', value: '2×' },
      { label: 'SLA risk alerts', value: 'Real-time' },
      { label: 'Stakeholders trained', value: '30+' },
    ],
    tools: ['Python', 'Tableau', 'Airflow', 'SQL'],
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="page-section" style={{ paddingTop: '6rem' }}>
      <div className="container-custom" style={{ display: 'grid', gap: '3rem' }}>
        <div className="section-intro centered">
          <span className="eyebrow">Projects</span>
          <h1 className="section-title">Selected professional impact</h1>
          <p className="section-description">
            A snapshot of the data products I have delivered—grounded in stakeholder partnership, measurable outcomes, and
            rigorous MLOps practices.
          </p>
        </div>

        <div className="btn-row" style={{ justifyContent: 'center' }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? 'button-primary' : 'button-secondary'}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="card-grid columns-2">
          {filteredProjects.map((project) => (
            <article key={project.title} className="content-card">
              <span className="eyebrow" style={{ fontSize: '0.75rem' }}>
                {project.focus}
              </span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{project.title}</h2>
              <p>{project.description}</p>
              <div className="stat-cluster">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="stat-card">
                    <div className="stat-value" style={{ fontSize: '1.4rem' }}>
                      {metric.value}
                    </div>
                    <div className="stat-label" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pill-list" style={{ marginTop: '1.5rem' }}>
                {project.tools.map((tool) => (
                  <span key={tool} className="pill">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
