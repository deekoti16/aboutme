import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">

      {/* <Router> */}
      <HashRouter>
        <Navbar />
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        {/* <Projects id="projects" /> */}
        <Resume id="resume" />
        <Contact id="contact" />
        <Footer id="footer" />
      </HashRouter>
      {/* </Router> */}


    </main>
  );
}

export default App;
