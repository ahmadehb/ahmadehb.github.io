import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import About from './About';
import ProjectsSection from './ProjectsSection';
import Lab from './Lab';
import Resume from './Resume';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

// Import images directly
import outputImage from './assets/output.png';
import sharedImage from './assets/SharedImage.png';
import bioinformaticsImage from './assets/Bioinformatics.jpeg';

function App() {
  const personalProjects = [
    {
      title: 'Data Analysis Using SQL, Python, and Machine Learning',
      description: 'Analysis of Gaming Behavior Dataset',
      id: 'personal-project',
      image: outputImage, // Use imported image
      pdf: '/GameAnalysisPDF.pdf',
      github: 'https://github.com/ahmadehb/GamingBehaviorAnalysis',
    },
  ];

  const groupProjects = [
    {
      title: 'Sentiment Analysis Using NLP and Machine Learning',
      description: 'Analysis of Amazon Product Reviews',
      id: 'group-project',
      image: sharedImage, // Use imported image
      pdf: '/SentimentAnalysis.pdf',
      github: '',
    },
  ];

  const bioinformaticsProjects = [
    {
      title: 'Bioinformatics Using Python',
      description: 'Analysis of DNA Dataset',
      id: 'bioinformatics-project',
      image: bioinformaticsImage, // Use imported image
      pdf: '',
      github: 'https://github.com/ahmadehb/BioinfotmaticsProject',
    },
  ];

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <ProjectsSection
                  id="projects-personal"
                  title="Projects/Personal"
                  projects={personalProjects}
                />
                <ProjectsSection
                  id="projects-group"
                  title="Projects/Group"
                  projects={groupProjects}
                />
                <ProjectsSection
                  id="projects-bioinformatics"
                  title="Projects/Bioinformatics"
                  projects={bioinformaticsProjects}
                />
                <Lab />
                <Resume />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
