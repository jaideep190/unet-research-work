import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentSection from './components/ContentSection';
import './styles/App.css';

const sections = [
  { id: 'paper', title: 'Paper' },
  { id: 'app', title: 'App' },
  { id: 'data-visualization', title: 'Dataset and Visualization' },
  { id: 'model-architecture', title: 'Model Architecture' },
  { id: 'fourier-fit', title: 'Fourier Fit Equation' },
  { id: 'error-analysis', title: 'Error Analysis' },
];

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="content-header">
          <h1 className="main-title">SmartBP: Smartphone-Based Blood Pressure Measurement System</h1>
          <div className="contributors-box">
            <h2 className="contributors-title">Abhinay Bhandekar (bhandekar22102@iiitnr.edu.in) • Thakur Jaideep Singh (thakur22102@gmail.com) • Dr. Debanjan Das</h2>
          </div>
        </div>
        {sections.map((section) => (
          <ContentSection
            key={section.id}
            id={section.id}
            title={section.title}
            active={activeSection === section.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;