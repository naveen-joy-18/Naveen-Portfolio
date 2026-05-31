import { motion } from 'framer-motion';
import { Network, Building2, GraduationCap } from 'lucide-react';
import './Collaborations.css';

const Collaborations = () => {
  const collabs = [
    {
      institution: "University of Edinburgh",
      icon: <Building2 />,
      description: "Engaged in multiple collaborative projects including a survival analysis project, along with broader academic and research collaborations spanning interdisciplinary domains and applied problem-solving initiatives."
    },
    {
      institution: "Indian Institute of Science, Bangalore",
      icon: <Network />,
      description: "Collaborated on quantum computing research initiatives with IISc Bangalore, contributing to joint research efforts and innovation-driven projects, along with active participation and achievements in hackathons."
    },
    {
      institution: "Kannur University",
      icon: <GraduationCap />,
      description: "Collaborated on quantum computing research initiatives, invited Tech-talks and contributing to joint research efforts and innovation-driven projects."
    },
    {
      institution: "MIT Visvaprayag University",
      icon: <Building2 />,
      description: "Engaged in collaborative quantum computing research and broader academic partnerships, including joint research initiatives and innovation-driven projects."
    }
  ];

  return (
    <section id="collaborations" className="collaborations section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-number">06</span>
        <h2 className="section-title">Research Collaborations</h2>
      </motion.div>

      <div className="collab-grid">
        {collabs.map((collab, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="collab-card flat-card"
          >
            <div className="collab-icon">
              {collab.icon}
            </div>
            <h3 className="collab-title">{collab.institution}</h3>
            <p className="collab-desc">{collab.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collaborations;
