import { useInView } from '../hooks/useInView';
import './Skills.css';

const skillGroups = [
  { label: 'Languages', items: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript'], color: '#7C3AED' },
  { label: 'Libraries & Frameworks', items: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'OpenCV', 'Flask', 'React', 'Flutter', 'Streamlit'], color: '#10B981' },
  { label: 'Visualization & Tools', items: ['Matplotlib', 'Seaborn', 'Tableau', 'Jupyter', 'Google Colab', 'GitHub', 'VS Code'], color: '#F59E0B' },
];

const certifications = [
  { name: 'ML with Python', org: 'IBM', icon: '🔷' },
  { name: 'AI Foundations Associate', org: 'Oracle', icon: '🔴' },
  { name: 'Generative AI Fundamentals', org: 'Databricks', icon: '🟠' },
  { name: 'AWS Fundamentals', org: 'Amazon', icon: '🟡' },
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="section-inner">
        <div className={`section-header${inView ? ' visible' : ''}`}>
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">Skills & Certifications</h2>
        </div>

        <div className={`skills-wrap${inView ? ' visible' : ''}`}>
          {skillGroups.map((g, i) => (
            <div className="skill-row" key={g.label} style={{ '--c': g.color, '--delay': `${i * 0.1}s` }}>
              <div className="skill-row-label">
                <span className="row-dot" />
                {g.label}
              </div>
              <div className="skill-chips">
                {g.items.map(item => (
                  <span className="skill-chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`certs-wrap${inView ? ' visible' : ''}`}>
          <h4 className="certs-heading">Certifications</h4>
          <div className="certs-row">
            {certifications.map((c, i) => (
              <div className="cert-pill" key={i}>
                <span className="cert-icon">{c.icon}</span>
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-org">{c.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
