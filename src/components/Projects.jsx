import { motion } from 'framer-motion';
import { Atom, Dna, Brain, Shield, Palette, Mic, Image as ImageIcon, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const quantumProjects = [
    {
      title: "Minimum Energy Dissipation Theorem Framework",
      date: "Feb 2026",
      icon: <Atom />,
      description: "Developed a computational framework based on the Minimum Energy Dissipation Theorem to model and optimize quantum system dynamics, focusing on achieving energetically efficient state transitions and stable equilibrium configurations.",
      tags: ["Quantum Dynamics", "Computational Framework", "Optimization"]
    },
    {
      title: "Quantum Enabled Peptide Folding Framework",
      date: "Sep 2025",
      icon: <Atom />,
      description: "Designed and implemented a Quantum framework for simulating peptide folding, leveraging Quantum Computing principles to predict protein conformations, optimize molecular energy landscapes, and generate quantum circuits.",
      tags: ["Quantum Computing", "VQE", "Protein Folding"]
    },
    {
      title: "Small Molecule Discovery for Zika Virus",
      date: "Aug 2025 – Present",
      icon: <Dna />,
      description: "Developing a hybrid quantum-classical AI framework for accelerating small peptide discovery using quantum machine learning algorithms to analyze peptide structures and predict biological activity.",
      tags: ["Quantum AI", "Drug Discovery", "QML"]
    },
    {
      title: "Memory-Augmented Meta-Learning Networks",
      date: "Jan 2026",
      icon: <Brain />,
      description: "Designed a memory-augmented meta-learning framework to enable continual learning in neural networks, reducing catastrophic forgetting through dynamic memory modules.",
      tags: ["Meta-Learning", "Continual Learning", "Neural Networks"]
    }
  ];

  const aiProjects = [
    {
      title: "Animal and Bird Intrusion Detection System",
      date: "Jan 2025",
      icon: <Shield />,
      description: "AI-powered intrusion detection system using sound and vision to automatically identify and deter farm intrusions with adaptive dataset expansion.",
      tags: ["Computer Vision", "Audio Processing", "IoT"],
      link: "https://github.com/naveen-joy-18/Automatic-Animal-and-Bird-Intrusion-Detection-System"
    },
    {
      title: "Neural Transfer of Images using LLMs",
      date: "Oct 2024",
      icon: <Palette />,
      description: "Neural style transfer system using LLMs to transform and blend images with artistic styles, enhancing creativity.",
      tags: ["LLMs", "Style Transfer", "Generative AI"],
      link: "https://github.com/naveen-joy-18/Neural-Transfer-of-Images"
    },
    {
      title: "Voice to Screenplay Creator",
      date: "2024",
      icon: <Mic />,
      description: "Secure web application for generating screenplays from voice input using advanced speech recognition and NLP.",
      tags: ["Speech Recognition", "NLP", "Web App"],
      link: "https://github.com/naveen-joy-18/BetaCoders_VoiceToScreenplay"
    },
    {
      title: "DALL-E Image Generator",
      date: "2024",
      icon: <ImageIcon />,
      description: "Python program to generate images from prompts using OpenAI's DALL-E API with intuitive interface.",
      tags: ["DALL-E", "API Integration", "Image Gen"],
      link: "https://github.com/naveen-joy-18/Image-Genration-Using-DALL-E"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-number">05</span>
        <h2 className="section-title">Featured Projects</h2>
      </motion.div>

      <div className="projects-container">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="projects-subtitle"
        >
          Quantum & AI Research Projects
        </motion.h3>
        <div className="projects-grid">
          {quantumProjects.map((project, idx) => (
            <motion.div 
              key={`q-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="project-card flat-card"
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-date">{project.date}</span>
              </div>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="projects-subtitle"
          style={{ marginTop: '4rem' }}
        >
          AI & Machine Learning Projects
        </motion.h3>
        <div className="projects-grid">
          {aiProjects.map((project, idx) => (
            <motion.div 
              key={`ai-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="project-card flat-card"
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-date">{project.date}</span>
              </div>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              {project.link && (
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer" className="github-link">
                    <FaGithub size={14} /> GitHub
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
