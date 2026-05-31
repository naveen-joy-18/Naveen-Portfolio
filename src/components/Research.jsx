import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import './Research.css';

const Research = () => {
  const publications = [
    {
      title: "Impact of Intrinsically Disordered Regions and Functional Disorder Hotspots in the Human Kinome",
      authors: "Thomas, S.D., Rajan, A., Mahin, A., Ahmed, M., Pavithra, S., Vignesh U., Joy, Naveen, John, L., Varghese, L., et al.",
      journal: "Briefings in Bioinformatics, 2025",
      impactFactor: "7.7",
      quartile: "Q1",
      link: "https://doi.org/10.1093/bib/bbaf662",
      description: "Comprehensive analysis of intrinsically disordered regions (IDRs) in the human kinome, revealing critical functional disorder hotspots and their implications for kinase regulation and drug discovery."
    },
    {
      title: "Quantum-Enhanced Convolutional Neural Networks for Automated Bone Cancer Screening on Radiographs",
      authors: "Joy, Naveen, Thomas, S.D., Rajan, A., Varghese, L., Balakrishnan, A., Thaikkad, A., Niranjan, V., Abhithaj, J., & Raju, R.",
      journal: "Quantum Reports, 2026",
      impactFactor: "1.8",
      quartile: "Q3",
      link: "https://www.mdpi.com/2624-960X/8/1/19",
      description: "Novel quantum-enhanced CNN architecture for automated bone cancer detection, demonstrating superior performance in radiograph analysis through quantum computing integration."
    },
    {
      title: "Structural-Based and AI-Assisted Identification of AGPS Inhibitors for Glioma",
      authors: "Thaikkad, A., Thomas, S.D., Dcunha, L., John, L., Vijayan, J., Joy, N., Dev, R., Raju, R., & Jayanandan, A.",
      journal: "ACS Omega, 2026",
      impactFactor: "4.3",
      quartile: "Q1",
      link: "https://doi.org/10.1021/acsomega.5c09368",
      description: "Integrated docking, molecular dynamics, and binding affinity screening for identifying AGPS inhibitors for glioma treatment through AI-assisted structural analysis."
    }
  ];

  return (
    <section id="research" className="research section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-number">04</span>
        <h2 className="section-title">Research & Publications</h2>
      </motion.div>

      <div className="research-grid">
        {publications.map((pub, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="research-card"
          >
            <div className="research-badge">
              <BookOpen size={11} />
              <span>{pub.quartile} · IF {pub.impactFactor}</span>
            </div>
            
            <div className="research-body">
              <h3 className="research-title">{pub.title}</h3>
              <p className="research-authors"><strong>Authors: </strong>{pub.authors}</p>
              <p className="research-journal">{pub.journal}</p>
              <p className="research-desc">{pub.description}</p>
            </div>
            
            <a href={pub.link} target="_blank" rel="noreferrer" className="research-link">
              <span>View</span>
              <ExternalLink size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Research;
