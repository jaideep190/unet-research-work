import React, { useState } from 'react';
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

  return (
    <div className="app">
      <Sidebar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="content">
        <h1 className="sidebar-title" style={{ textAlign: 'center' }}>SmartBP: Smartphone-Based Blood Pressure Measurement System</h1>
        <div className="contributors-box">
          <h2 className="contributors-title" style={{ textAlign: 'center', fontSize: '1rem' }}>Abhinay Bhandekar (bhandekar22102@iiitnr.edu.in) • Thakur Jaideep Singh (thakur22102@gmail.com) • Dr. Debanjan Das</h2>
        </div>
        <br></br>
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