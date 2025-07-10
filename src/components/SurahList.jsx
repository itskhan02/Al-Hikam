import { useState } from "react";

const SurahList = ({ chapters, chapterHandler }) => {
  const [activeId, setActiveId] = useState("");

  return (
    <div className="min-vh-100 shadow-lg p-3 bg-red">
      <h1 className="fs-5 fw-bold text-center">Quran</h1>
      <hr />
      <ul className="list-group text-end">
        {chapters && chapters.length > 0 ? (
          chapters.map((chapter) => (
            <div className="chapter" key={chapter.id}>
              <li
                onClick={() => {
                  chapterHandler(chapter);
                  setActiveId(chapter.id);
                }}
                className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between curser ${
                  chapter.id === activeId && "active"
                }`}
              >
                <div className="chapter-details">
                  <div className="chap">
                    <span className="chapter-id">{chapter.id} </span>
                    <div className="chapter-name">
                      <span>
                        {chapter.id === 3 ? "Al-Imran" : chapter.name_simple}
                      </span>
                      <span className="chapter-translation">
                        {chapter.translated_name?.name ||
                          "No translation available"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="arabic-id">{chapter.name_arabic}</span>
                  </div>
                </div>
              </li>
              <hr />
            </div>
          ))
        ) : (
          <div className="text-center">
            <span className="spinner-border"></span>
          </div>
        )}
      </ul>
    </div>
  );
};

export default SurahList;
