import { motion } from 'framer-motion';
import { ArrowRight, Download, FlaskConical } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container section-padding">
        {/* Full-width editorial hero — no photo */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-greeting"
        >
          Hello, I'm
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hero-title"
        >
          Naveen Joy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hero-divider"
        />

        {/* Two-column info row below the name */}
        <div className="hero-info-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hero-info-left"
          >
            <h2 className="hero-subtitle">
              CEO & Co-Founder, PHIMIND Pvt. Ltd.
            </h2>
            <p className="hero-description">
              Founded the Quantum Startup PHIMIND and also works as a Data Scientist at CIODS specializing in Quantum Machine Learning, Generative AI, 
              and cutting-edge biomedical data analysis. Published researcher with expertise in 
              quantum-enhanced AI solutions and omics data science.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-info-right"
          >
            <div className="hero-stats-strip">
              <div className="hero-stat">
                <span className="hero-stat-num">3</span>
                <span className="hero-stat-label">Publications</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">25+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">35+</span>
                <span className="hero-stat-label">Credentials</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA + Socials row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="hero-actions"
        >
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <span>Let's Connect</span>
              <ArrowRight size={16} />
            </a>
            <a href="#research" className="btn btn-secondary">
              <span>View Research</span>
              <FlaskConical size={16} />
            </a>
            <a href="/Naveen_Resume_Final.pdf" download className="btn btn-secondary btn-resume">
              <span>Resume</span>
              <Download size={16} />
            </a>
          </div>

          <div className="hero-social">
            <a href="https://www.linkedin.com/in/naveen-joy-" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/naveen-joy-18" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://phimind.in" target="_blank" rel="noreferrer" className="social-link">
              <img src="/phimind-logo.png" alt="Phimind" className="social-icon" />
            </a>
            <a href="https://wa.me/919483985321" target="_blank" rel="noreferrer" className="social-link">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="scroll-indicator"
      >
        <div className="mouse"></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
