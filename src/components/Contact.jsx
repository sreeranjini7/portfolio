import { useInView } from '../hooks/useInView';
import './Contact.css';

const contactLinks = [
  {
    label: 'Email',
    value: 'sreeranjinir07@gmail.com',
    href: 'mailto:sreeranjinir07@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: '#7C3AED',
  },
  {
    label: 'Phone',
    value: '+91 98945 32849',
    href: 'tel:+919894532849',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: '#10B981',
  },
  {
    label: 'LinkedIn',
    value: 'sree-ranjini-ranjith',
    href: 'https://www.linkedin.com/in/sree-ranjini-ranjith/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: '#0A66C2',
  },
  {
    label: 'GitHub',
    value: 'sreeranjini7',
    href: 'https://github.com/sreeranjini7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    color: '#F5F5F0',
  },
  {
    label: 'LeetCode',
    value: 'Sree_Ranjini',
    href: 'https://leetcode.com/u/Sree_Ranjini/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l3.854 3.763 6.361-6.228A1.371 1.371 0 0013.483 0zm-11.196 9.28l-1.017 5.174c-.075.451.069.928.465 1.321l5.244 5.063c.43.415 1.034.663 1.656.663.282 0 .Congo.04.883-.12l5.702-1.044a1.385 1.385 0 00.968-.601l5.094-7.281a1.386 1.386 0 00-.113-1.736L13.8 1.885a1.37 1.37 0 00-1.956.124L2.287 9.28zm6.762 10.159a1.386 1.386 0 01-1.657-.663l-5.244-5.063c-.396-.393-.54-.87-.465-1.321l1.017-5.174L11.8 16.947a1.386 1.386 0 01-.113 1.736z"/>
      </svg>
    ),
    color: '#FFA116',
  },
];

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section className="section section-alt" id="contact" ref={ref}>
      <div className="section-inner">
        <div className={`section-header${inView ? ' visible' : ''}`}>
          <span className="section-label">Let's Talk</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className={`contact-layout${inView ? ' visible' : ''}`}>
          <div className="contact-left">
            <p className="contact-intro">
              Let's connect. Whether you have an opportunity, a project, or simply want to start a conversation, I'd be happy to hear from you.
            </p>
            <div className="availability">
              <span className="avail-dot" />
              <span>Open for internships, jobs &amp; collaborations</span>
            </div>
          </div>

          <div className="contact-links">
            {contactLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="contact-card"
                style={{ '--lc': l.color }}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div className="contact-card-icon">{l.icon}</div>
                <div className="contact-card-text">
                  <span className="contact-card-label">{l.label}</span>
                  <span className="contact-card-value">{l.value}</span>
                </div>
                <svg className="contact-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">SR<em>.</em></span>
          <p>Designed &amp; Built by <strong>Sree Ranjini R</strong> · {new Date().getFullYear()}</p>
          <p className="footer-sub">AI &amp; Data Science · Coimbatore</p>
        </div>
      </footer>
    </section>
  );
}
