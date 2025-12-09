'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { skillCategories } from '@/data/skills';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import Timeline from '@/components/Timeline';
import SkillBar from '@/components/SkillBar';

/**
 * About page - Extended bio, career timeline, skills matrix
 */
export default function AboutPage() {
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
                <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
                    <span className="section-eyebrow mb-4 inline-block">About</span>
                    <h1 className="mb-6">{profile.name}</h1>
                    <p className="text-xl text-[var(--secondary)] leading-relaxed">
                        {profile.bio}
                    </p>
                </motion.div>

                {/* Extended Bio */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="max-w-3xl mx-auto">
                        <div className="card">
                            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                                <span className="text-2xl">👨‍💼</span>
                                Professional Summary
                            </h2>
                            <div className="prose prose-slate dark:prose-invert text-[var(--secondary)] space-y-4">
                                {profile.extendedBio.split('\n\n').map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Career Timeline */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="section-header">
                        <h2 className="section-title">Career Journey</h2>
                        <p className="section-subtitle">
                            From research analytics to production ML systems
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Timeline
                            items={experiences.map((exp) => ({
                                id: exp.id,
                                title: exp.title,
                                company: exp.company,
                                location: exp.location,
                                startDate: exp.startDate,
                                endDate: exp.endDate,
                                description: exp.description,
                                technologies: exp.technologies,
                            }))}
                        />
                    </div>
                </motion.section>

                {/* Skills Matrix */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="section-header">
                        <h2 className="section-title">Skills & Expertise</h2>
                        <p className="section-subtitle">
                            Technologies and methodologies I work with daily
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category) => (
                            <motion.div
                                key={category.name}
                                variants={itemVariants}
                                className="card"
                            >
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
                                    <span className="text-xl">{category.icon}</span>
                                    {category.name}
                                </h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill, i) => (
                                        <SkillBar
                                            key={skill.name}
                                            name={skill.name}
                                            proficiency={skill.proficiency}
                                            index={i}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="section-header">
                        <h2 className="section-title">Education</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {education.map((edu) => (
                            <motion.div key={edu.institution} variants={itemVariants} className="card">
                                <div className="text-3xl mb-3">🎓</div>
                                <h3 className="text-base font-semibold mb-1">{edu.degree}</h3>
                                <p className="text-[var(--primary)] font-medium text-sm mb-2">{edu.field}</p>
                                <p className="text-sm text-[var(--secondary)]">{edu.institution}</p>
                                <p className="text-sm text-[var(--secondary)]">{edu.location}</p>
                                <p className="text-xs text-[var(--secondary)] mt-2">
                                    {edu.startDate} – {edu.endDate}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Certifications */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="section-header">
                        <h2 className="section-title">Certifications</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.title}
                                variants={itemVariants}
                                transition={{ delay: i * 0.1 }}
                                className="card flex items-start gap-3"
                            >
                                <span className="text-2xl">{cert.icon}</span>
                                <div>
                                    <h3 className="text-sm font-semibold mb-1">{cert.title}</h3>
                                    <p className="text-xs text-[var(--primary)] font-medium mb-1">
                                        {cert.issuer} {cert.code && `· ${cert.code}`}
                                    </p>
                                    <p className="text-xs text-[var(--secondary)]">{cert.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Languages */}
                <motion.section variants={itemVariants} className="mb-12">
                    <div className="section-header">
                        <h2 className="section-title">Languages</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {profile.languages.map((lang) => (
                            <motion.div key={lang.name} variants={itemVariants} className="card text-center">
                                <p className="font-semibold text-[var(--foreground)] mb-1">{lang.name}</p>
                                <p className="text-sm text-[var(--secondary)] mb-3">{lang.level}</p>
                                <div className="h-1.5 bg-[var(--muted)] rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section variants={itemVariants} className="text-center">
                    <div className="card py-8 max-w-2xl mx-auto">
                        <h3 className="mb-3">Want to work together?</h3>
                        <p className="text-[var(--secondary)] mb-6">
                            I&apos;m always open to discussing new opportunities and interesting problems.
                        </p>
                        <a href="mailto:hajiyev.shamkhal@gmail.com" className="btn btn-primary">
                            Get in Touch
                        </a>
                    </div>
                </motion.section>
            </motion.div>
        </main>
    );
}
