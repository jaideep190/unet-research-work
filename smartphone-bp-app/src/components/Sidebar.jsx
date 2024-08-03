import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ sections, activeSection, setActiveSection, isSidebarOpen, toggleSidebar }) {
  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? '✕' : '☰'} Sections
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <br></br>
        <br></br>
        <h2 className="sidebar-title">SmartBP</h2>
        <ul className="sidebar-menu">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
            >
              <a 
                href={`#${section.id}`} 
                onClick={() => {
                  setActiveSection(section.id);
                  if (window.innerWidth <= 768) {
                    toggleSidebar();
                  }
                }}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;