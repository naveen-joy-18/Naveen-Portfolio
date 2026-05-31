import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Projects from './components/Projects';
import Collaborations from './components/Collaborations';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Collaborations />
        <Achievements />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
