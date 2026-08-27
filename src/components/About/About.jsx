import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './About.css';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div className="section-header" {...fadeInUp} transition={{ duration: 0.6 }}>
          <span className="section-label">01. Background</span>
          <h2 className="section-title">A bit about me</h2>
        </motion.div>

        <div className="about__layout">
          <div className="about__text-content">
            <motion.p className="about__text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
              I'm a physics student from Berlin. I've always been fascinated by how a few fundamental laws can explain so much of the world around us. But my real interest lies in application—taking those theoretical principles and using them to build practical, technical solutions.
            </motion.p>
            
            <motion.p className="about__text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              I'm currently studying Physics at <strong>TU Berlin</strong>, but my favorite part of the field is getting hands-on outside the classroom. Whether it's winning the <em>INVENT a CHIP</em> competition, building AI tools as a software developer, or currently working on battery and solar tech at <strong>Bosch</strong>, I love turning theory into practice. This Fall (2026), I'm heading to <strong>UC Santa Barbara</strong> for a semester abroad, where I'll have the exciting opportunity to contribute to the milliQan Experiment through a research course (PHYS 199) with Prof. David Stuart. Long-term, I'm aiming for a career in research—and eventually a PhD—somewhere between physics and electrical engineering.
            </motion.p>

            <motion.p className="about__text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
              When I'm not studying or working, I volunteer at a local senior home helping out with tech support and events. Otherwise, you'll probably find me hiking, exploring the outdoors, or trying to keep up with my energetic Chihuahua, Leo.
            </motion.p>

            <motion.div className="about__meta" {...fadeInUp} transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="about__location">
                <MapPin size={18} strokeWidth={1.5} />
                <span>Santa Barbara, CA & Berlin, Germany</span>
              </div>
              <div className="about__languages">
                <span>🇩🇪 EN 🇷🇺</span>
              </div>
            </motion.div>
          </div>

          <div className="about__gallery">
            <motion.div 
              className="about__photo-wrapper about__photo-1"
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              whileInView={{ opacity: 1, rotate: -2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/images/Hungary.jpeg" alt="In Hungary" className="about__photo" />
            </motion.div>

            <motion.div 
              className="about__photo-wrapper about__photo-2"
              initial={{ opacity: 0, rotate: 3, y: 20 }}
              whileInView={{ opacity: 1, rotate: 3, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img src="/images/Hiking.JPG" alt="Me hiking" className="about__photo" />
            </motion.div>

            <motion.div 
              className="about__photo-wrapper about__photo-3"
              initial={{ opacity: 0, rotate: -4, y: 20 }}
              whileInView={{ opacity: 1, rotate: -4, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img src="/images/Dog.jpeg" alt="Leo, my Chihuahua" className="about__photo" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
