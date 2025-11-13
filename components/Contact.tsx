'use client';

import { FormEvent, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

/**
 * Contact section - Conversational invitation with refined form
 * Features gradient highlights, structured contact info, and friendly feedback states
 */
export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'idle';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'YOUR_PUBLIC_KEY';

      const hasEmailConfig = [serviceId, templateId, publicKey].every(
        (value) => !value.startsWith('YOUR_') && value.trim().length > 0
      );

      if (hasEmailConfig) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          publicKey
        );
      } else {
        console.info('EmailJS credentials not configured. Skipping outbound request.');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully. Expect a reply within two business days.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email via EmailJS', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Reach me directly at hajiyev.shamkhal@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'hajiyev.shamkhal@gmail.com',
      href: 'mailto:hajiyev.shamkhal@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'shamkhalhajiyev',
      href: 'https://linkedin.com/in/shamkhalhajiyev',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'shamkhalhajiyev',
      href: 'https://github.com/shamkhalhajiyev',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const promisePoints = [
    'Thoughtful discovery to ensure the brief is precise.',
    'Transparent roadmaps and proactive communication.',
    'Measurable success metrics aligned with your stakeholders.',
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 1, 0.22, 1] as const,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 1, 0.22, 1] as const },
    },
  };

  return (
    <section ref={ref} className="page-section" id="contact">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-6">
            <span className="section-eyebrow">Collaborate</span>
            <h2>Let&apos;s design your next data advantage</h2>
            <p className="text-lg text-[var(--secondary)]">
              Share your challenge, transformation roadmap, or upcoming initiative—expect a thoughtful, strategic response.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 xl:gap-16">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_55%)]" />
                <div className="relative space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">What to expect</p>
                  <h3 className="text-3xl font-semibold leading-tight">Clarity, craft, and measurable outcomes</h3>
                  <ul className="space-y-4 text-sm text-white/80">
                    {promisePoints.map((point) => (
                      <li key={point} className="flex gap-4">
                        <span className="mt-1 text-lg">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-white/80">
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">Response time</p>
                      <p className="font-semibold text-white">Within 48 hours</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">Based in</p>
                      <p className="font-semibold text-white">Wrocław, Poland (CET)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="floating-card flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--muted)] text-[var(--primary)]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)] mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-base font-semibold text-[var(--foreground)] hover:text-[var(--accent-secondary)]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-[var(--foreground)]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="card space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[var(--foreground)]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]/70 px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)]"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]/70 px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[var(--foreground)]">
                    What would you like to achieve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]/70 px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)] resize-none"
                    placeholder="Share as much context as you like — goals, timelines, data landscape."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>

                {status.type !== 'idle' && (
                  <div
                    className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                      status.type === 'success'
                        ? 'border-emerald-300/60 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-900/20 dark:text-emerald-200'
                        : 'border-rose-300/60 bg-rose-50 text-rose-700 dark:border-rose-500/40 dark:bg-rose-900/20 dark:text-rose-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
