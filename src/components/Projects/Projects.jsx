import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'GYPT Silver Medal',
    subtitle: 'German Young Physicists\' Tournament — 3rd Place Nationals (2024)',
    description: 'Conducted an experimental investigation of flame shadow imaging and the Zeeman effect in resonance absorption. Analyzed spectral data and presented findings at the national stage.',
    image: '/projects/Quantum Light Dimmer.png'
  },
  {
    title: 'INVENT a CHIP — 1st Place',
    subtitle: 'National Microchip Design Competition (2023)',
    description: 'Designed FPGA-based hardware logic in VHDL for a solar tracker control system. Won 1st place in the national competition organized by the German Electrical Engineering Association (VDE) and BMBF.',
    image: '/projects/IAC.png'
  },
  {
    title: 'GYPT Bronze Medal',
    subtitle: 'German Young Physicists\' Tournament — 4th Place Nationals (2023)',
    description: 'Explored energy transfer dynamics, normal modes, and resonance phenomena through precise measurements and theoretical modeling of magnetically coupled spring pendulums.',
    image: '/projects/MMO.jpeg'
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.div className="section-header" {...fadeInUp} transition={{ duration: 0.6 }}>
          <span className="section-label">03. Competitions</span>
          <h2 className="section-title">Projects & Awards</h2>
        </motion.div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="projects__item"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="projects__item-content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__subtitle">{project.subtitle}</p>
                <p className="projects__description">{project.description}</p>
              </div>
              {project.image && (
                <div className="projects__item-image-wrapper">
                  <img src={project.image} alt={project.title} className="projects__item-image" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
