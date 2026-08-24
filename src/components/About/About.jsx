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
              I grew up in Berlin and developed a deep 
              curiosity for how things work. Whether it's understanding the fundamental laws 
              of physics or exploring the natural world, I've always loved figuring out how things fit together.
            </motion.p>
            
            <motion.p className="about__text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              Right now, I'm taking a semester abroad at the <strong>University of California, 
              Santa Barbara</strong>, soaking up the California sun while continuing my physics 
              studies. Back home, I'm a Physics B.Sc. student at <strong>TU Berlin</strong>.
            </motion.p>

            <motion.p className="about__text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
              When I step away from the lab, you'll probably find me outside. 
              I love hiking, exploring new places, and taking photos along the way. I also 
              spend a lot of time with my Chihuahua, Leo.
            </motion.p>

            <motion.p className="about__text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.4 }}>
              I'm trilingual—growing up speaking both German and Russian at home—and English 
              has always been a huge part of my life. I've been lucky enough to work on some 
              amazing projects, from solar panel simulations at Bosch to winning national chip 
              design competitions, but what really drives me is the joy of learning.
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
