'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, projectFilters } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

/**
 * Projects page - Filterable project showcase
 * Uses centralized project data with category filtering
 */
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : activeFilter === 'professional' || activeFilter === 'github'
      ? projects.filter((p) => p.category === activeFilter)
      : projects.filter((p) => p.domains.includes(activeFilter as 'ml' | 'data-engineering' | 'analytics'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <motion.div
        className="container-custom section-padding"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="section-header">
          <span className="section-eyebrow mb-4 inline-block">Projects</span>
          <h1 className="section-title">Selected Professional Impact</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            A snapshot of the data products I have delivered—grounded in stakeholder partnership, measurable outcomes, and rigorous MLOps practices.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              focus={project.focus}
              description={project.description}
              metrics={project.metrics}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              featured={project.featured}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-12">
            <p className="text-[var(--secondary)]">No projects found for this filter.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 border border-[var(--border)]">
            <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="text-[var(--secondary)] mb-6 max-w-2xl mx-auto">
              Open to discussing data science opportunities, challenging problems, and collaborative projects.
            </p>
            <a href="mailto:hajiyev.shamkhal@gmail.com" className="btn btn-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
