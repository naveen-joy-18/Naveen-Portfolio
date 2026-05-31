import { motion } from 'framer-motion';
import { Trophy, Award, Users, Mic, Presentation, FileBadge } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "IonQ Quantum Research Grant",
      date: "2025",
      icon: <Award />,
      description: "Awarded the IonQ Quantum Research Grant for Quantum Conformational Workflow of Dark Peptide Regions, with hands-on experience in developing and executing real-time quantum workflows on IonQ quantum hardware."
    },
    {
      title: "IISc Qiskit Fall Fest 2025 — Winner",
      date: "2025",
      icon: <Trophy />,
      description: "Secured First Place in IISc x Qiskit Fall Fest 2025 by completing IBM QRADAR Challenge, competing against 300+ projects nationwide."
    },
    {
      title: "HOPE AI National Hackathon — Winner",
      date: "July 2025",
      icon: <Trophy />,
      description: "Secured 1st Place in HOPE AI Hackathon with CIODS AI team. Solution received highest recognition among 130+ projects."
    },
    {
      title: "Executive Member — SU India Summit 2025",
      date: "Aug 2025",
      icon: <Users />,
      description: "Attended Singularity University India Summit engaging with global leaders in AI and exponential technologies."
    },
    {
      title: "Lead Speaker — IQ-BIO Workshop",
      date: "2025",
      icon: <Mic />,
      description: "Delivered expert sessions on advanced AI frameworks and quantum concepts at IQ-BIO National Workshop, Kannur University."
    },
    {
      title: "Lead Speaker — AI Innovation Bootcamp",
      date: "2025",
      icon: <Presentation />,
      description: "Conducted 'AI Innovation Bootcamp: Demystifying the AI Pipeline' at Yenepoya Institute of Technology."
    },
    {
      title: "Speaker — Yenepoya School of Engg. & Tech",
      date: "2025",
      icon: <Mic />,
      description: "Delivered a session on Artificial Intelligence and Machine Learning, covering core concepts and real-world applications."
    },
    {
      title: "Microsoft Azure DP-900 Certified",
      date: "2023",
      icon: <FileBadge />,
      description: "Earned DP-900 certification demonstrating proficiency in core data concepts and Azure services."
    }
  ];

  return (
    <section id="achievements" className="achievements section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-number">07</span>
        <h2 className="section-title">Achievements & Awards</h2>
      </motion.div>

      <div className="achievements-grid">
        {achievements.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="achievement-card flat-card"
          >
            <div className="achievement-icon">
              {item.icon}
            </div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-desc">{item.description}</p>
            <span className="achievement-date">{item.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
