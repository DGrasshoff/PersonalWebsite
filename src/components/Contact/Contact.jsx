import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../icons';
import './Contact.css';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="contact__content"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact__name">Daniel Graßhoff</h2>
          
          <div className="contact__socials">
            <a href="https://linkedin.com/in/daniel-grasshoff-1731b1298" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://github.com/danielgrasshoff" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href="mailto:daniel.grasshoff@icloud.com" aria-label="Email">
              <Mail size={24} strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
