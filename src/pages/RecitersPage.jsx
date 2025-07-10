import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Reciters from '../components/Reciters';
import SurahPlayer from '../components/SurahPlayer';
import { fetchReciters, fetchChapterDetails } from '../utils/api'; 
import { IoChevronBack } from 'react-icons/io5'; 
import Translation from '../components/Translation';

const ChapterPage = ({ darkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { chapterDetail } = location.state || {};
  const [reciterDetail, setReciterDetail] = useState(null);
  const [recitersList, setRecitersList] = useState([]);
  const [chapterInfo, setChapterInfo] = useState(null);
  const [showTranslation, setShowTranslation] = useState("transliteration"); 

  useEffect(() => {
    if (!chapterDetail) {
      navigate('/quran'); 
      return;
    }
  }, [chapterDetail, navigate]);

  useEffect(() => {
    const fetchRecitersList = async () => {
      try {
        const reciters = await fetchReciters();
        const uniqueReciters = reciters.filter(
          (reciter, index, self) =>
            index === self.findIndex((r) => r.name === reciter.name)
        );
        setRecitersList(uniqueReciters);
      } catch (error) {
        console.error('Error fetching reciters:', error);
      }
    };
    fetchRecitersList();
  }, []);

  const reciterHandler = (reciter) => {
    setReciterDetail(reciter);
  };

  return (
    <div className={`row p-5 reciter-body ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="col-12">
        <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        <IoChevronBack />
      </button>
      </div>
      <div style={{marginBottom: '15rem'}}>
      <div className="col-12 chapter-title">
        <h1 className="text-center">{chapterDetail?.id} . {chapterDetail?.id===3 ? 'Al-Imran' : chapterDetail?.name_simple}</h1>
        <p className="text-center">{chapterDetail?.translated_name?.name}</p>
      </div>
    
      <div className="col-12 mt-4">
        {recitersList.length > 0 ? (
          <Reciters reciters={recitersList} reciterHandler={reciterHandler} darkMode={darkMode} />
        ) : (
          <div className="text-center">
            <span className="spinner-border"></span>
          </div>
        )}
      </div>
      <div className=" col-12 mt-4">
        {reciterDetail && (
          <SurahPlayer reciterDetail={reciterDetail} chapterDetail={chapterDetail} darkMode={darkMode} />
        )}
      </div>
      <div className="chapter-info mt-4">
          <Translation
            showTranslation={showTranslation}
            setShowTranslation={setShowTranslation}
            darkMode={darkMode}
          />
        </div>
      </div>
      </div>
  );
};



export default ChapterPage;
