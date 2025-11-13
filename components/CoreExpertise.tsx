'use client';

const focusAreas = [
  {
    title: 'Predictive intelligence',
    summary:
      'Forecasting demand, revenue, and customer behaviour using ensembles, deep learning, and interpretable models tuned for executive decision-making.',
    bullets: [
      'Sales and supply forecasts with LSTM, ARIMA, Prophet, and Gradient Boosting.',
      'Customer churn and conversion modelling with SHAP-driven storytelling.',
      'Scenario planning dashboards embedded in Power BI and Tableau.',
    ],
  },
  {
    title: 'Operational analytics',
    summary:
      'Reimagining processes with data products that unlock speed, resilience, and transparency across logistics and commercial functions.',
    bullets: [
      'Program performance benchmarking across 19+ KPIs with automated data ingestion.',
      'Route optimisation, pricing elasticity, and marketing attribution insights.',
      'Design of monitoring frameworks that surface anomalies before they escalate.',
    ],
  },
  {
    title: 'Data science enablement',
    summary:
      'Coaching teams on experimentation best practices, reproducible codebases, and analytics literacy to scale impact sustainably.',
    bullets: [
      'Documentation-first approach with templates, runbooks, and onboarding kits.',
      'Technical mentorship for analysts adopting Python, SQL, and ML workflows.',
      'Workshops that convert model output into actionable narratives for stakeholders.',
    ],
  },
];

const toolkits = [
  {
    label: 'Languages & Modelling',
    stack: ['Python', 'R', 'SQL', 'PySpark', 'Scikit-learn', 'TensorFlow', 'CatBoost', 'LightGBM'],
  },
  {
    label: 'Data & MLOps',
    stack: ['Azure ML', 'Databricks', 'MLflow', 'Airflow', 'Docker', 'Power BI', 'dbt'],
  },
  {
    label: 'Methodologies',
    stack: ['Time-series forecasting', 'Segmentation & clustering', 'Predictive maintenance', 'Experiment design', 'SHAP & interpretability'],
  },
];

const certifications = [
  'Microsoft Certified: Azure Data Scientist Associate',
  'Google Advanced Data Analytics Professional Certificate',
  'Google Business Intelligence Professional Certificate',
];

export default function CoreExpertise() {
  return (
    <section className="page-section" id="expertise">
      <div className="container-custom">
        <div className="section-intro centered">
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title">Deep domain knowledge across the data science lifecycle</h2>
          <p className="section-description">
            I combine statistical rigour with systems thinking—shipping models, automation, and enablement programmes that
            stay maintainable long after the first release.
          </p>
        </div>

        <div className="card-grid columns-3">
          {focusAreas.map((area) => (
            <article key={area.title} className="content-card">
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
              <ul className="list-styled">
                {area.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="page-section" style={{ paddingTop: '4rem', paddingBottom: '0' }}>
          <div className="card-grid columns-3">
            {toolkits.map((group) => (
              <div key={group.label} className="tools-card">
                <h4>{group.label}</h4>
                <ul>
                  {group.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
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
