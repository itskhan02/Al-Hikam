import React from 'react';

const About = ({ darkMode }) => {
  return (
    <div style={{ background: darkMode ? '#1c1e26' : '#fff', color: darkMode ? '#fff' : '#1c1e26', padding: '1rem' }}>
      <h1>About Al-Hikam</h1>
      <p>This is an Islamic companion app providing access to Quran, Hadith, and more.</p>
    </div>
  );
};

export default About;
