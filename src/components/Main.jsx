import React from 'react';
import Prayertime from './Prayertime';
import { getDailyDua } from '../components/Duas';

const Main = ({ siderCollapsed, windowWidth }) => {
  const dailyDua = getDailyDua();

  // Responsive width and margin
  let contentMaxWidth = '700px';
  let contentMargin = '2rem';
  let flexDirection = 'row';
  let duaPadding = '2rem';
  let duaPaddingTop = '5rem';

  if (windowWidth <= 900) {
    contentMaxWidth = '100vw';
    contentMargin = '0';
    flexDirection = 'column';
    duaPadding = '1rem';
    duaPaddingTop = '2rem';
  }

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
          flexDirection,
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'space-evenly',
          padding: '1rem',
          gap: '2rem',
          width: '100%',
          boxSizing: 'border-box',
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
            flex: '1 1 350px',
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
            padding: duaPadding,
            paddingTop: duaPaddingTop,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            marginLeft: contentMargin,
            marginRight: contentMargin,
            transition: 'max-width 0.3s, margin 0.3s',
            flex: '1 1 350px',
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
    </>
  );
};

export default Main;
