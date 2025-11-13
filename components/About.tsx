'use client';

const achievements = [
  {
    title: 'Sales forecasting platform',
    description:
      'Designed LSTM and ARIMA forecasting in Azure ML that delivers 90%+ accuracy and cut planning time by 95%.',
  },
  {
    title: 'Customer retention uplift',
    description:
      'Built churn propensity models with SHAP explainability to protect $2.3M in annual revenue.',
  },
  {
    title: 'Analytics automation',
    description:
      'Engineered a Polars-powered analytics pipeline with 99.9% uptime and 10× throughput for executive KPIs.',
  },
];

const experience = [
  {
    role: 'Data Science Specialist',
    company: 'Align Technology',
    period: 'Jan 2023 – Present',
    location: 'Wrocław, Poland',
    focus:
      'Leading strategic ML initiatives across forecasting, churn prediction, and program performance analytics for global operations.',
    highlights: [
      'Ensemble-based order conversion scoring with Azure ML and real-time Power BI surfacing.',
      'Automated churn monitoring pipeline with production-ready feature engineering and SHAP insights.',
      'Forecasted regional demand with deep learning and classical time series models embedded into business planning.',
    ],
  },
  {
    role: 'Data Scientist · Research Analyst',
    company: 'AsstrA',
    period: 'Nov 2020 – Dec 2022',
    location: 'Warsaw, Poland',
    focus:
      'Delivered route optimisation, pricing analytics, and predictive maintenance solutions within international logistics.',
    highlights: [
      'Introduced customer segmentation and marketing analytics to double qualified lead engagement.',
      'Implemented anomaly detection for logistics operations to pre-empt SLA risks.',
      'Mentored analysts on Python best practices and experimentation frameworks.',
    ],
  },
];

export default function About() {
  return (
    <section className="page-section" id="about">
      <div className="container-custom">
        <div className="section-intro">
          <span className="eyebrow">Profile</span>
          <h2 className="section-title">Translating complex questions into measurable wins</h2>
          <p className="section-description">
            My background blends statistics, software craftsmanship, and stakeholder partnership. I specialise in
            architecting ML systems that survive production realities while staying deeply aligned with commercial goals.
          </p>
        </div>

        <div className="card-grid columns-2">
          <article className="content-card highlighted">
            <h3>What I deliver</h3>
            <p>
              A hands-on partner from discovery to deployment: shaping experimentation backlogs, curating reliable data
              foundations, and operationalising models with robust monitoring. I communicate in business-first language so
              leaders understand both the why and the how of every solution.
            </p>
            <div className="card-grid columns-2">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="content-card">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="content-card">
            <h3>Core strengths</h3>
            <ul className="list-styled">
              <li>
                <strong>Strategic analytics leadership</strong>
                <span>Partnering with GTM, supply chain, and executive teams to anchor ML work in revenue objectives.</span>
              </li>
              <li>
                <strong>Production craftsmanship</strong>
                <span>Shipping resilient Azure ML pipelines, Databricks notebooks, and CI/CD workflows with full documentation.</span>
              </li>
              <li>
                <strong>Storytelling & enablement</strong>
                <span>Turning complex model behaviour into compelling narratives and training programmes that elevate teams.</span>
              </li>
            </ul>
          </aside>
        </div>

        <div className="page-section" style={{ paddingTop: '4rem', paddingBottom: '0' }}>
          <div className="section-intro">
            <span className="eyebrow">Experience</span>
            <h3>Recent roles &amp; impact</h3>
          </div>
          <div className="timeline">
            {experience.map((entry) => (
              <article key={entry.role} className="timeline-item">
                <header className="timeline-meta">
                  <div>
                    <strong>{entry.role}</strong> · {entry.company}
                  </div>
                  <div>
                    {entry.period} · {entry.location}
                  </div>
                </header>
                <p>{entry.focus}</p>
                <ul className="list-styled">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
