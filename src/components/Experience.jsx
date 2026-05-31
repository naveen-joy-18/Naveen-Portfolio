import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "CEO & Co-Founder",
      company: "PHIMIND Private Limited",
      date: "Feb 2026 – Present",
      location: "Kerala & Karnataka, India",
      responsibilities: [
        "Founded and leading PHIMIND Private Limited, building next-generation Quantum AI systems that address computational challenges beyond classical limits.",
        "Defining the company's strategic vision, research roadmap, and technology direction while driving product development, partnerships, and cross-disciplinary innovation.",
        "Building and managing cross-functional teams across engineering, research, and operations.",
        "Ensuring alignment between technical development and real-world impact through client-focused solutions."
      ]
    },
    {
      role: "Data Scientist",
      company: "CIODS (Centre for Integrative Omics Data Science)",
      date: "June 2025 – Present",
      location: "Mangaluru, India",
      responsibilities: [
        "Leading the development and deployment of advanced Quantum AI and ML models for biomedical and clinical omics data analysis, improving predictive performance.",
        "Collaborating with cross-functional teams on interdisciplinary research projects, combining omics, clinical data, and statistical models to drive translational insights.",
        "Spearheading real-time data integration pipelines and custom LLM workflows.",
        "Authoring technical reports and contributing to research publications."
      ]
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-number">03</span>
        <h2 className="section-title">Work Experience</h2>
      </motion.div>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="timeline-item"
          >
            <div className="timeline-marker">
              <Briefcase size={16} />
            </div>
            <div className="timeline-content flat-card">
              <span className="timeline-date">{exp.date}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="timeline-location">{exp.location}</p>
              <ul className="timeline-list">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
