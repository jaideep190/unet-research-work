import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentSection from './components/ContentSection';

const sections = [
  { id: 'paper', title: 'Paper' },
  { id: 'app', title: 'App' },
  { id: 'data-visualization', title: 'Dataset and Visualization' },
  { id: 'model-architecture', title: 'Model Architecture' },
  { id: 'fourier-fit', title: 'Fourier Fit Equation' },
  { id: 'error-analysis', title: 'Error Analysis' },
];

const contributors = [
  { name: 'Bhandekar Abhinay', role: 'Student' },
  { name: 'Thakur Jaideep Singh', role: 'Student' },
  { name: 'Debanjan Das', role: 'Senior Advisor' },
];

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="app">
      <Sidebar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="content">
        <h1 className="sidebar-title">SmartBP: Smartphone-Based Blood Pressure Measurement System</h1>
        <div className="contributors">
          {contributors.map((contributor, index) => (
            <span key={index}>
              {contributor.name} ({contributor.role})
              {index < contributors.length - 1 ? ' • ' : ''}
            </span>
          ))}
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