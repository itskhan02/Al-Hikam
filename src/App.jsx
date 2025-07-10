import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import 'remixicon/fonts/remixicon.css';
import './components/Css/Style.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quran from './pages/Quran';
import NamazTime from './pages/NamazTime';
import NamesofAllah from './pages/NamesofAllah';
import Dua from './pages/Dua';
// import Hadith from './pages/Hadith';
import RecitersPage from './pages/RecitersPage';
import ChapterPage from './pages/RecitersPage';
import English from './pages/English';
import Arabic from './pages/Arabic';
import Transliteration from './pages/Transliteration';
import QuranTranslation from './pages/QuranTranslation';


const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.style.backgroundColor = darkMode ? '#1c1e26' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#1c1e26';
  }, [darkMode]);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <BrowserRouter>
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ backgroundColor:'#F8F8FF' }}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/quran" element={<Quran darkMode={darkMode} />} />
          <Route path='/quranaudio' element={<QuranTranslation darkMode={darkMode} />} />
          <Route path="/chapter" element={<RecitersPage darkMode={darkMode} />} />
          <Route path="/chapter/:chapterName" element={<ChapterPage />} />
          <Route path="/prayer" element={<NamazTime darkMode={darkMode} />} />
          <Route path="/name" element={<NamesofAllah darkMode={darkMode} />} />
          <Route path="/name" element={<NamesofAllah darkMode={darkMode} />} />
          <Route path="/dua" element={<Dua darkMode={darkMode} />} />
          {/* <Route path="/hadith" element={<Hadith darkMode={darkMode} />} /> */}
          <Route path="/transliteration" element={<Transliteration darkMode={darkMode} />} />
          <Route path="/english" element={<English darkMode={darkMode} />} />
          <Route path="/arabic" element={<Arabic darkMode={darkMode} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
