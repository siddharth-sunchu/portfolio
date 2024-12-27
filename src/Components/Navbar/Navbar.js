import React from 'react';
import { Users, Book, Award, Star, Briefcase, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeSection, sections }) => {
  return (
    <aside className="navbar">
      <nav className="nav-content">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
          >
            {section.icon}
            <span className="nav-text">{section.title}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;
