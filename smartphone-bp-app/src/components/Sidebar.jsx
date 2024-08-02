import React from 'react';

function Sidebar({ sections, activeSection, setActiveSection }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">SmartBP</h2>
      <ul className="sidebar-menu">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
          >
            <a href={`#${section.id}`} onClick={() => setActiveSection(section.id)}>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;