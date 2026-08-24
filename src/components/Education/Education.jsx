import { motion } from 'framer-motion';
import './Education.css';

const education = [
  {
    institution: 'Technische Universität Berlin',
    degree: 'Physics B.Sc.',
    period: '2024 — Present',
    details: 'Studying theoretical and experimental physics with a focus on mathematical methods and quantum mechanics.',
  },
  {
    institution: 'University of California, Santa Barbara',
    degree: 'Exchange Semester',
    period: '2026',
    details: 'Currently studying abroad at one of the top physics departments in the United States, experiencing California life.',
  },

];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <motion.div className="section-header" {...fadeInUp} transition={{ duration: 0.6 }}>
          <span className="section-label">04. Education</span>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        <div className="education__list">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="education__item"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="education__meta">
                <span className="education__period">{edu.period}</span>
              </div>
              <div className="education__content">
                <h3 className="education__institution">{edu.institution}</h3>
                <p className="education__degree">{edu.degree}</p>
                <p className="education__details">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
