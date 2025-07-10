import { useState, useRef, useEffect } from 'react';
import quranSurahs from '../components/Quranaudio'; 
import { useNavigate } from 'react-router-dom';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaPlay } from 'react-icons/fa';
import { GiPauseButton } from 'react-icons/gi';
import { IoChevronBack } from 'react-icons/io5';

const QuranTranslation = () => {
  const navigate = useNavigate(); 

  const [currentSurahIndex, setCurrentSurahIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef(null);
  const currentSurah = currentSurahIndex !== null ? quranSurahs[currentSurahIndex] : null;



  useEffect(() => {
    const audio = audioRef.current;
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('durationchange', updateDuration);
    
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('durationchange', updateDuration);
    };
  }, []);

  const togglePlayPause = () => {
    if (!currentSurah) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const selectSurah = (index) => {
    setCurrentSurahIndex(index);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const playNextSurah = () => {
    if (currentSurahIndex === null) return;
    const nextIndex = (currentSurahIndex + 1) % quranSurahs.length;
    selectSurah(nextIndex);
  };

  const playPreviousSurah = () => {
    if (currentSurahIndex === null) return;
    const prevIndex = (currentSurahIndex - 1 + quranSurahs.length) % quranSurahs.length;
    selectSurah(prevIndex);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };


  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
    <div style={{ padding: '1rem', fontSize: '1.6rem' }}>
      <div className="col-12">
              <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
                <IoChevronBack />
              </button>
            </div>

          <div className="quran-player">
      <h2 className="player-title" style={{ fontSize: '2rem' }}>Quran Audio Player</h2>

      <div className="surah-select relative group rounded-lg  bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-600 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
      <svg y={0} xmlns="http://www.w3.org/2000/svg" x={0} width={100} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height={100} className="w-14 h-14 absolute right-0 -rotate-45 stroke-pink-500 top-1.5 group-hover:rotate-0 duration-300">
        <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" fill="none" d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z" className="svg-stroke-primary" />
      </svg>
      <select
        className="surah-selector appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
        value={currentSurah?.id || ""}
        onChange={(e) => {
          const selectedId = parseInt(e.target.value);
          const index = quranSurahs.findIndex(surah => surah.id === selectedId);
          selectSurah(index >= 0 ? index : null);
        }}
      >
        <option value="">Select a Surah</option>
        {quranSurahs.map((surah) => (
          <option key={surah.id} value={surah.id}>
            {surah.id}. {surah.name}
          </option>
        ))}
      </select>
      </div>

      <div className="player-controls">
        <button 
          className="control-btn prev-btn"
          onClick={playPreviousSurah}
          disabled={currentSurahIndex === null}
        >
        <TbPlayerTrackPrevFilled />
        </button>
        
        <button 
          className={`control-btn play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlayPause}
          disabled={!currentSurah}
        >
          {isPlaying ? <GiPauseButton style={{color: '#00002e'}}/> : <FaPlay style={{color: '#00002e'}}/>}
        </button>

        <button 
          className="control-btn next-btn"
          onClick={playNextSurah}
          disabled={currentSurahIndex === null}
        >
          <TbPlayerTrackNextFilled />
        </button>
      </div>
      
      <div className="progress-container">
        <span className="time-display">{formatTime(currentTime)}</span>
        <input
          type="range"
          className="progress-bar"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleProgressChange}
          disabled={!currentSurah}
        />
        <span className="time-display">{formatTime(duration)}</span>
      </div>
      
      {currentSurah ? (
        <div className="surah-info">
          <h3>Surah {currentSurah.name}</h3>

        </div>
      ) : (
        <div className="no-surah-selected">
          Please select a Surah from the dropdown
        </div>
      )}
      
      <audio
        ref={audioRef}
        src={currentSurah?.audio}
        onEnded={playNextSurah}
      />
    </div>
    </div>
    
  );
};

export default QuranTranslation;