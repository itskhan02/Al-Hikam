import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSurahVerses } from '../utils/api'; // Use the actual API function

const English = () => {
  const location = useLocation();
  const chapterDetail = location.state?.chapterDetail; 
  const [translations, setTranslations] = useState([]);

  const fetchTranslations = async () => {
    if (chapterDetail) {
      try {
        const data = await getSurahVerses(chapterDetail.id); // Fetch translations using the API
        console.log('Fetched translations:', data);

        // Ensure the data is an array and contains the expected structure
        if (Array.isArray(data) && data.every(verse => verse.translation)) {
          setTranslations(data);
        } else {
          console.error('Unexpected API response format:', data);
          setTranslations([]);
        }
      } catch (error) {
        console.error('Error fetching translations:', error);
        setTranslations([]);
      }
    } else {
      console.warn('No chapterDetail provided');
    }
  };

  useEffect(() => {
    if (chapterDetail) {
      fetchTranslations();
    }
  }, [chapterDetail]);

  console.log('Chapter Detail:', chapterDetail);
  console.log('Fetched translations:', translations);

  return (
    <div>
      <h1 className="text-center" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        {chapterDetail?.name_simple}
      </h1>
      {chapterDetail?.id >= 2 && (
        <div>
          <h6 className="text-center" style={{ fontSize: '1.6rem', float: 'inline-start' }}>
            In the name of Allah, the Most Gracious, the Most Merciful.
          </h6>
          <br/>
        </div>
      )}
      <div className="translations-container ">
        {translations.length > 0 ? (
          translations.map((verse, index) => (
            <p key={verse.id || index} style={{ fontSize: '1.6rem', marginBottom: '1rem', display:'flex', justifyContent: 'flex-start', textTransform:'none' }}>
              <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                {index + 1}.
              </span>
              {verse.translation || 'Translation not available'}
            </p>
          ))
        ) : (
          <p>{translations.length === 0 ? 'No translations available' : 'Loading...'}</p>
        )}
      </div>
    </div>
  );
};

export default English;
