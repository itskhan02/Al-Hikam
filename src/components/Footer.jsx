import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(() => {

    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    
    const handleStorageChange = () => {
      setDarkMode(localStorage.getItem('darkMode') === 'true');
    };

    

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [darkMode]);

  return (
    <>
      <footer>
        <div className="credit">
          <h1>
            Made with <span>❤</span> {" "}
            <a
              href="" // Add your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: darkMode ? '#fff' : '#1c1e26' }} 
            >
              {/* // Add your name */}
            </a>
          </h1>
          <hr  /> 
          <h2>
            <span> &copy;</span> 2025 Al-Hikam, All rights reserved.
          </h2>
        </div>
        
      </footer>
    </>
  );  
};

export default Footer;
