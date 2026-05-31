import { motion } from 'framer-motion';
import { Atom, Brain, Code, Network, Lightbulb, Globe } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Quantum Computing & AI",
      icon: <Atom />,
      skills: ["Quantum Machine Learning", "Quantum Artificial Intelligence", "Quantum Computing Frameworks", "Variational Quantum Eigensolver"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain />,
      skills: ["Generative AI", "Large Language Models", "Deep Learning", "Applied Machine Learning"]
    },
    {
      title: "Programming & Development",
      icon: <Code />,
      skills: ["Python", "Data Analysis & Visualization", "API Integration", "Web Development"]
    },
    {
      title: "Networking & DevOps",
      icon: <Network />,
      skills: ["Network Administration", "CI/CD Pipelines", "Docker & Containerization", "System Administration"]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb />,
      skills: ["Leadership & Team Management", "Technical Communication", "Research & Problem Solving", "Time Management"]
    },
    {
      title: "Languages Known",
      icon: <Globe />,
      skills: ["English (Full Proficiency)", "Kannada (Full Proficiency)", "Malayalam (Native)", "Hindi (Intermediate)"]
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-number">08</span>
        <h2 className="section-title">Skills & Expertise</h2>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="skill-category flat-card"
          >
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="skills-tags">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
