import React from 'react';
import Prayertime from './Prayertime';
import { getDailyDua } from '../components/Duas';

const Main = ({ siderCollapsed }) => {
  const dailyDua = getDailyDua();

  // Responsive width and margin
  const contentMaxWidth = siderCollapsed ? '700px' : '600px';
  const contentMargin = siderCollapsed ? '2rem' : 'auto';

  return (
    <>
      <section id="front">
        <div className="hero">
          <h1>YOUR ISLAMIC COMPANION</h1>
          <p>Explore the Qur'an, hadith, daily duas, prayer times, and more</p>
        </div>
      </section>
      <section
        id="prayer-dua"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap', // changed from 'nonwrap' to 'wrap'
          alignItems: 'stretch',
          justifyContent: 'space-evenly',
          padding: '1rem',
          gap: '2rem',
        }}
      >
        <div
          className="namaz-time"
          style={{
            width: '100%',
            maxWidth: contentMaxWidth,
            marginBottom: '2rem',
            marginLeft: contentMargin,
            marginRight: '2rem',
            transition: 'max-width 0.3s, margin 0.3s',
            flex: '1 1 350px', // allow to shrink/grow
            minWidth: '280px',
          }}
        >
          <Prayertime />
        </div>
        <div
          className="daily-dua"
          style={{
            width: '100%',
            maxWidth: contentMaxWidth,
            textAlign: 'justify',
            padding: '2rem',
            paddingTop: '5rem',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            marginLeft: contentMargin,
            marginRight: contentMargin,
            transition: 'max-width 0.3s, margin 0.3s',
            flex: '1 1 350px', // allow to shrink/grow
            minWidth: '280px',
          }}
        >
          <h1 >Daily Dua</h1>
          <h2 >
            {dailyDua.title}
          </h2>
          <p
            style={{
              textAlign: 'right',
              fontSize: '2.7rem',
              fontFamily: 'Traditional Arabic',
              marginBottom: '1rem',
              wordBreak: 'break-word',
            }}
          >
            {dailyDua.arabic}
          </p>
          <p style={{ fontSize: '1.7rem', marginBottom: '0.5rem' }}>
            <strong>Transliteration:</strong> {dailyDua.transliteration}
          </p>
          <p style={{ fontSize: '1.7rem' }}>
            <strong>Translation:</strong> {dailyDua.translation}
          </p>
        </div>
      </section>
      <style>
        {`
          @media (max-width: 900px) {
            #prayer-dua {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 1.5rem !important;
            }
            .namaz-time, .daily-dua {
              max-width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
              min-width: 0 !important;
            }
          }
          @media (max-width: 600px) {
            .namaz-time, .daily-dua {
              padding: 1rem !important;
              font-size: 1.2rem !important;
            }
            .daily-dua h1, .daily-dua h2 {
              font-size: 2rem !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Main;
