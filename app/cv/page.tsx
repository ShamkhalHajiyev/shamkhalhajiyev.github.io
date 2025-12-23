'use client';

import { motion } from 'framer-motion';
import PDFDownloadButton from '@/components/PDFDownloadButton';

/**
 * CV Page - Comprehensive curriculum vitae
 * Includes professional summary, experience, education, skills, certifications, and languages
 */
export default function CVPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-[var(--background)]">
      <motion.div
        className="container-custom section-padding"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h1 className="mb-3">Shamkhal Hajiyev</h1>
              <h2 className="text-xl md:text-2xl text-[var(--secondary)]">
                Data Scientist | Machine Learning Engineer
              </h2>
            </div>
            <PDFDownloadButton />
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--secondary)]">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:hajiyev.shamkhal@gmail.com" className="hover:text-[var(--primary)]">
                hajiyev.shamkhal@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+48576086031" className="hover:text-[var(--primary)]">
                +48 576 086 031
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Wrocław, Poland</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <a href="https://linkedin.com/in/shamkhalhajiyev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">
                shamkhalhajiyev
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <a href="https://github.com/shamkhalhajiyev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">
                shamkhalhajiyev
              </a>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="section-title-sm flex items-center gap-2 mb-4">
            <span className="text-xl">👨‍💼</span>
            Professional Summary
          </h2>
          <div className="card">
            <div className="space-y-4 text-[var(--secondary)]">
              <p>
                Results-oriented Data Scientist & Machine Learning Engineer with 4+ years of experience in delivering
                end-to-end data science solutions across predictive modeling, time series forecasting, and advanced
                analytics. Skilled in Python, SQL, and cloud-based platforms (Azure ML, Databricks, PySpark), with a
                strong background in Statistics and Machine Learning.
              </p>
              <p>
                Proven expertise in designing and deploying scalable ML pipelines, automating ETL workflows with
                Airflow, and integrating models into real-time business applications. Adept at combining data
                engineering, model development, and interpretability techniques (e.g., SHAP) to generate actionable
                insights that support strategic decision-making.
              </p>
              <p>
                Collaborative and agile professional with experience in cross-functional teamwork, stakeholder
                communication, and mentoring, passionate about applying data science to solve complex problems and
                drive innovation in dynamic business environments.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="section-title-sm flex items-center gap-2 mb-4">
            <span className="text-xl">🎯</span>
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-base mb-2 font-bold">Sales Forecasting Excellence</h3>
              <p className="text-sm text-[var(--secondary)]">
                Developed and deployed 90%-accurate sales forecasting models, reducing planning time by 95% and
                enabling data-driven strategic decisions.
              </p>
            </div>
            <div className="card">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-base mb-2 font-bold">Customer Retention Impact</h3>
              <p className="text-sm text-[var(--secondary)]">
                Built 95%-accurate churn prediction models, improving customer retention by 15% and protecting $2.3M in
                annual revenue.
              </p>
            </div>
            <div className="card">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-base mb-2 font-bold">Data Pipeline Optimization</h3>
              <p className="text-sm text-[var(--secondary)]">
                Modernized ETL processes achieving 40% performance improvement and 10x increase in data processing
                capacity.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Professional Experience */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="section-title-sm flex items-center gap-2 mb-4">
            <span className="text-xl">💼</span>
            Professional Experience
          </h2>

          {/* Align Technology */}
          <div className="card mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-lg mb-1">Data Science Specialist</h3>
                <p className="text-[var(--primary)] font-medium">Align Technology</p>
              </div>
              <div className="text-sm text-[var(--secondary)] mt-2 md:mt-0">
                <p>Jan 2023 - Nov 2025</p>
                <p>Wrocław, Poland</p>
              </div>
            </div>
            <p className="text-sm text-[var(--secondary)] mb-4">
              Leading data science initiatives and developing advanced ML solutions for business optimization.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold mb-2">Key Projects & Achievements:</h4>
                <ul className="space-y-2 text-sm text-[var(--secondary)]">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--primary)]">•</span>
                    <span><strong>Order Conversion:</strong> Designed and deployed an ensemble model in Azure ML (CatBoost, LightGBM, XGBoost) to predict order conversion probability, delivering real-time Power BI insights with SHAP-based interpretability. Built Azure ML model to forecast conversion timelines for accurate sales planning.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--primary)]">•</span>
                    <span><strong>Customer Churn Prediction:</strong> Developed and deployed a churn prediction system in Azure ML with scalable feature engineering and ensemble modeling, achieving high-accuracy predictions; integrated SHAP explanations and automated reporting for actionable retention insights.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--primary)]">•</span>
                    <span><strong>Forecasting Modelling:</strong> Designed and deployed LSTM and ARIMA models to generate monthly and quarterly forecasts for feature sales, visualizing real-time results in PowerBI for data-driven decision-making.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--primary)]">•</span>
                    <span><strong>Program Performance Analytics:</strong> Engineered a high-performance analytics pipeline using Polars and multiprocessing, achieving faster processing of millions of records with 99.9% pipeline uptime. Built advanced k-Nearest Neighbors pipeline in Azure ML with automated KPI calculations enabling performance benchmarking across 19 business metrics.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Previous Role */}
          <div className="card">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-lg mb-1">Data Scientist – Research Analyst</h3>
                <p className="text-[var(--primary)] font-medium">CRISIL Irevna Poland Sp z o.o.</p>
              </div>
              <div className="text-sm text-[var(--secondary)] mt-2 md:mt-0">
                <p>Apr 2021 - Dec 2022</p>
                <p>Wrocław, Poland</p>
              </div>
            </div>
            <p className="text-sm text-[var(--secondary)] mb-4">
              Developed financial analytics solutions and maintained data infrastructure for portfolio risk assessment.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold mb-2">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2 text-sm text-[var(--secondary)]">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--primary)]">•</span>
                    <span><strong>Web Application Development:</strong> Developed and deployed a Dash web application (Python, Docker, MySQL) for portfolio managers to analyze risk exposure, optimize asset allocation, and perform advanced financial analytics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--primary)]">•</span>
                    <span><strong>Database Management:</strong> Maintained and optimized a MySQL Server database, leading monthly data updates while ensuring integrity and consistency across financial datasets.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--primary)]">•</span>
                    <span><strong>ETL Automation:</strong> Automated and streamlined ETL workflows using Airflow, Luigi, Pandas, Polars, and NumPy, improving reliability, scalability, and efficiency of data pipelines.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="section-title-sm flex items-center gap-2 mb-4">
            <span className="text-xl">🎓</span>
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-base mb-2">Master of Arts in Data Science and Business Analytics</h3>
              <p className="text-sm text-[var(--primary)] font-medium mb-2">University of Warsaw</p>
              <p className="text-sm text-[var(--secondary)]">Oct 2019 - Jul 2021</p>
              <p className="text-sm text-[var(--secondary)]">Warsaw, Poland</p>
            </div>
            <div className="card">
              <h3 className="text-base mb-2">Bachelor Science of Economics</h3>
              <p className="text-sm text-[var(--primary)] font-medium mb-2">ADA University</p>
              <p className="text-sm text-[var(--secondary)]">Sep 2014 - Jul 2019</p>
              <p className="text-sm text-[var(--secondary)]">Baku, Azerbaijan</p>
            </div>
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="section-title-sm flex items-center gap-2 mb-4">
            <span className="text-xl">🛠️</span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-base mb-3 font-bold flex items-center gap-2">
                <span>💻</span>
                Programming Languages & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R Programming', 'SQL', 'GIT', 'Docker', 'Bash'].map((skill) => (
                  <span key={skill} className="chip text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-base mb-3 font-bold flex items-center gap-2">
                <span>🤖</span>
                Machine Learning & AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Statistics', 'Machine Learning', 'Deep Learning', 'Time Series Forecasting', 'Generative AI', 'Large Language Models (LLMs)'].map((skill) => (
                  <span key={skill} className="chip text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-base mb-3 font-bold flex items-center gap-2">
                <span>⚙️</span>
                Data Engineering & Pipelines
              </h3>
              <div className="flex flex-wrap gap-2">
                {['ETL Development', 'Data Wrangling', 'Feature Engineering', 'Workflow Automation', 'Airflow', 'Luigi', 'API Integration'].map((skill) => (
                  <span key={skill} className="chip text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-base mb-3 font-bold flex items-center gap-2">
                <span>☁️</span>
                Big Data & Cloud Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Azure ML', 'Azure Databricks', 'Fabric', 'PySpark'].map((skill) => (
                  <span key={skill} className="chip text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="section-title-sm flex items-center gap-2 mb-4">
            <span className="text-xl">🏆</span>
            Professional Certifications
          </h2>
          <div className="space-y-3">
            {[
              {
                title: 'Microsoft Certified: Azure Data Scientist Associate',
                description: 'DP-100 - Advanced machine learning and data science on Azure',
              },
              {
                title: 'Deeplearning.AI: Machine Learning Specialization',
                description: 'Comprehensive machine learning fundamentals and advanced techniques',
              },
              {
                title: 'Microsoft Certified: Azure AI Fundamentals',
                description: 'AI-900 - Artificial intelligence and machine learning concepts',
              },
              {
                title: 'Microsoft Certified: Azure Data Fundamentals',
                description: 'DP-900 - Core data concepts and Azure data services',
              },
              {
                title: 'Microsoft Certified: Azure Fundamentals',
                description: 'AZ-900 - Core Azure services and cloud concepts',
              },
            ].map((cert, index) => (
              <div key={index} className="card flex items-start">
                <svg className="w-6 h-6 mr-3 text-[var(--primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div>
                  <h3 className="text-base mb-1">{cert.title}</h3>
                  <p className="text-sm text-[var(--secondary)]">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="section-title-sm flex items-center gap-2 mb-4">
            <span className="text-xl">🌍</span>
            Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'English', level: 'Fluent' },
              { name: 'Azerbaijani', level: 'Native' },
              { name: 'Turkish', level: 'Fluent' },
              { name: 'Polish', level: 'Basic' },
            ].map((lang) => (
              <div key={lang.name} className="card text-center">
                <p className="font-semibold text-[var(--foreground)]">{lang.name}</p>
                <p className="text-sm text-[var(--secondary)]">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section variants={itemVariants} className="text-center">
          <div className="card py-8">
            <h3 className="mb-3">Interested in Collaboration?</h3>
            <p className="text-[var(--secondary)] mb-6">
              I&apos;m always open to discussing new opportunities, interesting problems, or potential collaborations.
            </p>
            <a href="mailto:hajiyev.shamkhal@gmail.com" className="button-primary">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
