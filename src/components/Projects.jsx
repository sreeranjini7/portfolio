import { useInView } from '../hooks/useInView';
import './Projects.css';

const projects = [
  {
    title: 'VisionX – Real-Time Emotion & Object Detection System',
    subtitle: 'Real-Time Emotion & Object Detection',
    desc: 'Developed a real-time computer vision system capable of detecting emotions, gender, and objects from live video streams using OpenCV, DeepFace, and YOLOv5. The project combines deep learning and computer vision techniques to analyze visual data and generate meaningful behavioral insights. Designed with potential applications in customer experience analysis, retail intelligence, and smart surveillance systems.',
    tags: ['OpenCV', 'DeepFace', 'YOLOv5', 'Python'],
    accent: '#7C3AED',
    size: 'large',
  },
  {
    title: 'Pest Classification System Using Deep Learning',
    subtitle: 'Agricultural Deep Learning',
    desc: 'Built a deep learning-based pest identification system using PyTorch and ResNet18 to classify agricultural pests from crop images. The project leverages transfer learning to improve model performance while reducing training time. It demonstrates the practical application of machine learning and image classification techniques in supporting precision agriculture and crop health monitoring.',
    tags: ['PyTorch', 'ResNet18', 'Deep Learning'],
    accent: '#10B981',
    size: 'small',
  },
  {
    title: 'Retail Sales Analysis',
    subtitle: 'Sales & Business Intelligence',
    desc: 'Conducted exploratory data analysis on a retail dataset containing over 9,900 records to uncover sales trends, profitability patterns, and regional performance insights. Using Python, Pandas, NumPy, and Matplotlib, the project transformed raw transactional data into visual reports and actionable business insights that support data-driven decision-making.',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'Python'],
    accent: '#F59E0B',
    size: 'small',
  },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section className="section section-alt" id="projects" ref={ref}>
      <div className="section-inner">
        <div className={`section-header${inView ? ' visible' : ''}`}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="bento-grid">
          {projects.map((p, i) => (
            <div
              className={`bento-card bento-${p.size}${inView ? ' visible' : ''}`}
              key={i}
              style={{ '--acc': p.accent, '--delay': `${i * 0.12}s` }}
            >
              <div className="bento-glow" />
              <div className="bento-content">
                <p className="bento-sub">{p.subtitle}</p>
                <h3 className="bento-title">{p.title}</h3>
                <p className="bento-desc">{p.desc}</p>
                <div className="bento-tags">
                  {p.tags.map(t => <span key={t} className="btag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
