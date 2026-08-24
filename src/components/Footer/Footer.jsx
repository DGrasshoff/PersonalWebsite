import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__info">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Daniel Graßhoff.<br />
            Designed in Berlin. • Last updated: {__BUILD_DATE__}
          </p>
        </div>

        <div className="footer__socials">
          <a href="https://linkedin.com/in/daniel-grasshoff-1731b1298" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://github.com/danielgrasshoff" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="mailto:website@danielgrasshoff.com" aria-label="Email">
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
