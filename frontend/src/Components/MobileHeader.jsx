import React from 'react';
import './Header.css';

const MobileHeader = ({ showLinks }) => {
  return (
    <nav className={`navbar ${showLinks ? 'active' : ''}`}>
      {showLinks && (
        <ul className=''>
          <li>
            <a href="/client">Client</a>
          </li>
          <li>
            <a href="/tech-stack">Tech Stack</a>
          </li>
          <li>
            <a href="/our-team">Our Team</a>
          </li>
          <li>
            <a href="/contact-us">Contact</a>
          </li>
          {/* Add other navigation links here */}
        </ul>
      )}
    </nav>
  );
};

export default MobileHeader;
