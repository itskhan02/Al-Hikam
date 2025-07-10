import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchChapterDetails } from "../utils/api";
// import Translation from '../components/Translation';  

const SurahPlayer = ({ reciterDetail, chapterDetail, darkMode }) => {
  // const [chapterInfo, setChapterInfo] = useState(null);
  // const [showTranslation, setShowTranslation] = useState("transliteration"); 

  const audiLink = (reciter, number) =>
    reciter + "/" + ("00" + number).slice(-3) + ".mp3";

  useEffect(() => {
    const fetchDetails = async () => {
      if (chapterDetail) {
        const details = await fetchChapterDetails(chapterDetail.id);
        setChapterInfo(details);
      }
    };
    fetchDetails();
  }, [chapterDetail]);

  return (
    <>
      <div className={`reciter-player ${darkMode ? "dark-mode" : ""}`}>
      
        <div className="ReactPlayer" style={{ width: "100%", maxWidth: 900, minWidth: 180 }}>
          <ReactPlayer
            url={audiLink(reciterDetail.Server, chapterDetail.id)}
            controls={true}
            playing={false}
            width="95%"
            height="50px"
          />
        </div>

        {/* {chapterInfo && (
          <div className="chapter-info mt-4">

          
          <Translation
            showTranslation={showTranslation}
            setShowTranslation={setShowTranslation}
            darkMode={darkMode}
          />


          </div>
        )} */}


      </div>
    </>
  );
};

export default SurahPlayer;
