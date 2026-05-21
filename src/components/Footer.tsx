import React from 'react';

export const Footer: React.FC = () => {
  const handleScrollClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">Portfolio.</div>
        
        <ul className="footer-links">
          <li>
            <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleScrollClick('home')}>
              Home
            </span>
          </li>
          <li>
            <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleScrollClick('about')}>
              About
            </span>
          </li>
          <li>
            <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleScrollClick('experience')}>
              Experience
            </span>
          </li>
          <li>
            <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleScrollClick('projects')}>
              Projects
            </span>
          </li>
          <li>
            <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleScrollClick('contact')}>
              Contact
            </span>
          </li>
        </ul>
        
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Sirachat Maisuaydee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
