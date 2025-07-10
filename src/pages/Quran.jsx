import { useEffect, useState } from "react";
import axios from "axios";
import SurahList from "../components/SurahList";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Quran = () => {
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();
  // Fetch chapters from the API
  useEffect(() => {
    async function fetchChapters() {
      try {
        const response = await axios.get(
          "https://api.quran.com/api/v4/chapters"
        );
        if (response.data && response.data.chapters) {
          setChapters(response.data.chapters);
        } else {
          console.error("Invalid API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    }
    fetchChapters();
  }, []);
  const chapterHandler = (chapter) => {
    navigate(`/chapter/${chapter.name_simple}`, {
      state: { chapterDetail: chapter },
    });
  };
  return (
    <div className="row p-5 home-body">
      <div className="col-12">
        <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
          <IoChevronBack />
        </button>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-12 scroll">
        <SurahList chapters={chapters} chapterHandler={chapterHandler} />
      </div>
      <div className="col-lg-8 col-md-6 d-none d-md-block"></div>
    </div>
  );
};
export default Quran;
