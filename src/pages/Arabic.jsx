import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSurahVerses } from '../utils/api';

const Arabic = () => {
  const location = useLocation();
  const chapterDetail = location.state?.chapterDetail; // Get chapter details from state
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    const fetchVerses = async () => {
      if (chapterDetail) {
        try {
          const data = await getSurahVerses(chapterDetail.id); 
          console.log('Fetched verses:', data); 

          setVerses(data);
        } catch (error) {
          console.error('Error fetching verses:', error);
        }
      }
    };

    fetchVerses();
  }, [chapterDetail]);

  return (
    <div>
      <h1 className="text-center" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{chapterDetail?.name_arabic}</h1>
      {chapterDetail?.id >= 2 && (
        <div>
        <h5 className="text-center" style={{ fontSize: '2rem', fontWeight: '500', float:'inline-end', marginRight: '4rem', }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </h5>
        <br/>
        </div>
      )}
      <div className="verses-container">
        {verses.length > 0 ? (
          verses.map((verse, index) => (
            <p key={verse.id} className="arabic" style={{ fontSize: '2.3rem', fontWeight: '500', textAlign: 'right', marginRight: '2rem', display:'flex', flexDirection:'row-reverse', justifyContent: 'flex-start', }}>
              <span style={{ fontSize: '2rem', fontWeight: '500', marginRight: '1rem', marginLeft: '1.4rem', float: 'right',  }}>
                .{index + 1}
              </span>
              {verse.arabic}
            </p>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Arabic;
