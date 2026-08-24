import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../icons';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="hero__greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello, my name is
          </motion.span>

          <h1 className="hero__title">
            Daniel Graßhoff.
          </h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Currently spending a semester abroad at UC Santa Barbara. When I'm not studying 
            physics, you can usually find me hiking, climbing mountains, or spending time with my Chihuahua, Leo.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="hero__socials">
              <a href="https://linkedin.com/in/daniel-grasshoff-1731b1298" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com/danielgrasshoff" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="mailto:daniel.grasshoff@icloud.com" className="hero__social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            
            <a href="#about" className="hero__btn" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
              More about me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
          <ArrowDown size={24} strokeWidth={1.5} />
        </a>
      </motion.div>
    </section>
  );
}
