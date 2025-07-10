import { useState } from 'react';

const Reciters = ({ reciters, reciterHandler, darkMode }) => {
  const [activeId, setActiveId] = useState('');

  const handleChange = (e) => {
    const selectedReciter = reciters.find((reciter) => reciter.id === e.target.value);
    if (selectedReciter) {
      reciterHandler(selectedReciter);
      setActiveId(selectedReciter.id);
    }
  };

  return (
    <div
      className={`min-vh-100 p-3 reciter-list ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        boxSizing: 'border-box',
        padding: '1rem',
      }}
    >
      <h1 className="fs-5 fw-bold text-center">Select Reciter</h1>
      <hr />
      {reciters && reciters.length > 0 ? (
        <select
          className={`form-select ${darkMode ? 'bg-secondary text-light' : 'bg-white text-dark'}`}
          value={activeId}
          onChange={handleChange}
          style={{
            color: darkMode ? '#fff' : 'black',
            width: '60%',
            minWidth: 0,
            boxSizing: 'border-box',
            fontSize: '1.2rem',
            padding: '1rem',
            borderRadius: '0.6rem',
            border: '1px solid #ddd',
            marginBottom: '1rem',
          }}
        >
          <option value="" disabled>
            Select a Reciter
          </option>
          {reciters.map((reciter) => (
            <option key={reciter.id} value={reciter.id}>
              {reciter.name}
            </option>
          ))}
        </select>
      ) : (
        <div className="text-center">
          <span className="spinner-border"></span>
        </div>
      )}
      
    </div>
  );
};

export default Reciters;
