import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Working Student',
    company: 'Robert Bosch GmbH',
    period: '2025 — Present',
    description: [
      'Developed cell-level physical models and simulation logic for photovoltaic panels, bridging the gap between physics and software.',
      'Designed a custom 1-Wire-inspired communication protocol between STM microcontrollers on a PCB from scratch.'
    ],
  },
  {
    role: 'Software Developer',
    company: 'MeisterSystems GmbH',
    period: '2024 — 2025',
    description: [
      'Built automated data pipelines using web scraping and integrated AI tools to streamline internal workflows.',
      'Improved API integrations across various internal system components.'
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.div className="section-header" {...fadeInUp} transition={{ duration: 0.6 }}>
          <span className="section-label">02. Work</span>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="experience__list">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="experience__item"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="experience__meta">
                <span className="experience__period">{exp.period}</span>
              </div>
              <div className="experience__content">
                <h3 className="experience__role">
                  {exp.role} <span className="experience__company">@ {exp.company}</span>
                </h3>
                <ul className="experience__bullets">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
