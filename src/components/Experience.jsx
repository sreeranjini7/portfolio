import { useInView } from '../hooks/useInView';
import './Experience.css';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Nandha InfoTech',
    period: 'Jun – Jul 2025',
    location: 'Coimbatore',
    bullets: [
      'Built ML models for pest classification, sentiment analysis, and recommendation systems using Python.',
      'Performed data preprocessing, feature engineering, and model training using Pandas & NumPy.',
      'Applied computer vision and deep learning techniques to solve real-world agricultural and retail problems.',
    ],
    tags: ['Python', 'ML', 'Computer Vision', 'Deep Learning'],
    color: '#7C3AED',
  },
  {
    role: 'Web Development Intern',
    company: 'Altitudes',
    period: 'Jul – Aug 2024',
    location: 'Remote',
    bullets: [
      'Built responsive and user-friendly web applications using modern web development practices.',
      'Developed frontend interfaces with HTML, CSS, JavaScript, and React.',
      'Gained hands-on experience in UI design, responsive layouts, and collaborative project-based learning.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Frontend'],
    color: '#F59E0B',
  },
];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="section-inner">
        <div className={`section-header${inView ? ' visible' : ''}`}>
          <span className="section-label">Career</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="exp-grid">
          <div className="exp-timeline">
            {experiences.map((exp, i) => (
              <div className={`exp-card${inView ? ' visible' : ''}`} key={i} style={{ '--delay': `${i * 0.14}s`, '--accent': exp.color }}>
                <div className="exp-card-accent" />
                <div className="exp-card-body">
                  <div className="exp-top">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className="exp-company">{exp.company}</span>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-period">{exp.period}</span>
                      <span className="exp-loc">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  <div className="exp-tags">
                    {exp.tags.map(t => <span key={t} className="etag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education sidebar */}
          <div className={`edu-sidebar${inView ? ' visible' : ''}`}>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div className="edu-badge">2023 – 2027</div>
              <h3 className="edu-degree">B.Tech in Artificial Intelligence & Data Science</h3>
              <p className="edu-school">SNS College of Engineering</p>
              <p className="edu-loc">Coimbatore, India</p>
              <div className="edu-cgpa">
                <span className="cgpa-label">CGPA</span>
                <span className="cgpa-value">8.03 <span>/10</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
