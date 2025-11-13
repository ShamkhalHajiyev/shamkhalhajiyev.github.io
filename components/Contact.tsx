'use client';

const contactOptions = [
  {
    label: 'Email',
    value: 'hajiyev.shamkhal@gmail.com',
    href: 'mailto:hajiyev.shamkhal@gmail.com',
    description: 'Share the challenge you are tackling and I will respond within two business days.',
  },
  {
    label: 'Phone',
    value: '+48 576 086 031',
    href: 'tel:+48576086031',
    description: 'Best for time-sensitive conversations between 09:00 – 18:00 CET.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shamkhalhajiyev',
    href: 'https://linkedin.com/in/shamkhalhajiyev',
    description: 'Connect for thought leadership, speaking engagements, and mentoring requests.',
  },
];

export default function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container-custom">
        <div className="section-intro centered">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let&apos;s architect your next data advantage</h2>
          <p className="section-description">
            Whether you need a trusted partner to own an analytics roadmap or a specialist to accelerate delivery, I&apos;m
            ready to collaborate on high-impact work.
          </p>
        </div>

        <div className="contact-grid">
          {contactOptions.map((option) => (
            <div key={option.label} className="contact-card">
              <span className="eyebrow" style={{ fontSize: '0.75rem' }}>
                {option.label}
              </span>
              <a href={option.href} target={option.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {option.value}
              </a>
              <p>{option.description}</p>
            </div>
          ))}

          <div className="contact-card">
            <h3>Availability</h3>
            <p>
              Currently accepting consulting collaborations, senior data science engagements, and advisory roles focused
              on ML strategy, experimentation, and capability building.
            </p>
            <ul className="list-styled">
              <li>
                <strong>Location</strong>
                <span>Wrocław, Poland · Open to remote-first or hybrid models across Europe.</span>
              </li>
              <li>
                <strong>Languages</strong>
                <span>English, Azerbaijani, Russian, Turkish.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
