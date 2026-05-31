import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-number">09</span>
        <h2 className="section-title">Let's Connect</h2>
      </motion.div>

      <div className="contact-content">
        <div className="contact-inner">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-left"
          >
            <h3 className="contact-heading">Ready to collaborate on cutting-edge AI & Quantum projects?</h3>
            <p className="contact-desc">
              I'm always interested in discussing innovative projects, research collaborations, 
              and opportunities in Quantum AI, Machine Learning, and Data Science.
            </p>

            <div className="contact-social">
              <a href="https://www.linkedin.com/in/naveen-joy-" target="_blank" rel="noreferrer" className="social-btn">
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/naveen-joy-18" target="_blank" rel="noreferrer" className="social-btn">
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a href="https://wa.me/919483985321" target="_blank" rel="noreferrer" className="social-btn">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <a href="/Naveen_Resume_Final.pdf" download className="social-btn download-btn">
                <Download size={14} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="contact-right"
          >
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={18} /></div>
                <div className="contact-text">
                  <strong>Email</strong>
                  <a href="mailto:naveenjvl18@gmail.com">naveenjvl18@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={18} /></div>
                <div className="contact-text">
                  <strong>Phone</strong>
                  <a href="tel:+919483985321">+91 9483985321</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={18} /></div>
                <div className="contact-text">
                  <strong>Location</strong>
                  <span>Mangalore, Karnataka, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Naveen Joy. All rights reserved.</p>
        <p className="footer-subtitle">Quantum AI Engineer · Data Scientist · Researcher</p>
      </footer>
    </section>
  );
};

export default Contact;
