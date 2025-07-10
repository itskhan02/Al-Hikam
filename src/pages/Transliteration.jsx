import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSurahVerses } from '../utils/api';

const Transliteration = () => {
  const location = useLocation();
  const chapterDetail = location.state?.chapterDetail; 
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    const fetchVerses = async () => {
      if (chapterDetail) {
        try {
          const data = await getSurahVerses(chapterDetail.id);
          console.log('Fetched transliterations:', data);
          setVerses(data);
        } catch (error) {
          console.error('Error fetching transliterations:', error);
        }
      }
    };

    fetchVerses();
  }, [chapterDetail]);

  return (
    <div>
      <h1 className="text-center" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        {chapterDetail?.name_simple}
      </h1>
      {chapterDetail?.id >= 2 && (
        <div>
          <h6 className="text-center" style={{ fontSize: '1.7rem', float:'inline-start', marginTop: '1rem', marginBottom: '1rem' }}>
            Bismillaahir Rahmaanir Raheem
          </h6>
          <br/>
        </div>
      )}
      <div className="translations-container">
        {verses.length > 0 ? (
          verses.map((verse, index) => (
            <p key={verse.id} style={{ fontSize: '1.6rem', marginBottom: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
              <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                {index + 1}.
              </span>
              {verse.transliteration || 'Transliteration not available'}
            </p>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Transliteration;
