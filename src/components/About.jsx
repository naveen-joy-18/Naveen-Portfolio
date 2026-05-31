import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-number">02</span>
        <h2 className="section-title">About Me</h2>
      </motion.div>

      {/* Full-width text block */}
      <div className="about-body">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="about-lead"
        >
          <p className="about-lead-text">
            I'm a technically-equipped Applied AI Engineer and Quantum Developer with a professionally 
            equipped foundation in Generative AI, Quantum Computing, Quantum Machine Learning (QML), 
            and Quantum Artificial Intelligence (QAI).
          </p>
        </motion.div>

        <div className="about-two-col">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text"
          >
            Currently serving as a Data Scientist at CIODS (Centre for Integrative Omics Data Science), 
            where I lead the development and deployment of advanced Quantum AI and ML models for biomedical and 
            clinical omics data analysis, significantly improving predictive performance.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="about-text"
          >
            My work bridges the gap between quantum computing and artificial intelligence, developing 
            quantum-enhanced convolutional neural networks and hybrid quantum-classical frameworks for 
            real-world applications in healthcare and molecular discovery.
          </motion.p>
        </div>
      </div>

      {/* Education + Location cards in a 3-column layout */}
      <div className="about-cards-row">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="about-card flat-card"
        >
          <div className="about-card-icon">
            <GraduationCap size={20} />
          </div>
          <h4 className="about-card-title">B.E in Information Science</h4>
          <p className="about-card-sub">Visvesaraya Technological University</p>
          <p className="about-card-meta">2021 – 2025</p>
          <span className="about-card-badge">CGPA: 9.24</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="about-card flat-card"
        >
          <div className="about-card-icon">
            <GraduationCap size={20} />
          </div>
          <h4 className="about-card-title">Pre-University Education</h4>
          <p className="about-card-sub">Jnanodaya Bethany PUC</p>
          <p className="about-card-meta">2019 – 2021</p>
          <span className="about-card-badge">Percentile: 96</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="about-card flat-card"
        >
          <div className="about-card-icon">
            <MapPin size={20} />
          </div>
          <h4 className="about-card-title">Location</h4>
          <p className="about-card-sub">Mangalore, Karnataka</p>
          <p className="about-card-meta">India</p>
          <span className="about-card-badge">Available for Collaboration</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
