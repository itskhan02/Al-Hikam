import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdVolumeUp } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import AudioPlayer from "../components/AudioPlayer";

const NamesofAllah = () => {
  const navigate = useNavigate();
  const audioRefs = useRef([]);

  const handlePlayAudio = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (audioRefs.current[index]) {
      audioRefs.current[index].play();
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '100%', overflowX: 'auto' }}>
      <div className="col-12">
        <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
          <IoChevronBack />
        </button>
      </div>
      <section id="above-fold">
        <video
          className="center-align-vid"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/99-names-of-Allah - Made with Clipchamp.mp4"
        >
          Your browser does not support HTML5 video
        </video>
      </section>

      <section id="below-fold">
        <h1>99 NAMES OF ALLAH</h1>
        <div className="audio">
          <AudioPlayer />
        </div>
        <div className="names">
          <table className="name-table">
            <thead className="table-head">
              <tr>
                <th
                  className="h-number"
                  style={{ backgroundColor: "#606163", fontSize: "2.5rem" }}
                >
                  #
                </th>
                <th className="h-arabic">Arabic:</th>
                <th className="h-audio">Pronunciation:</th>
                <th className="h-translate">Transliteration:</th>
                <th className="h-meaning">Name Meaning:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="n-number">1</td>
                <td className="arabic-name">
                  <img src={"/assets/name/1.webp"} alt="Ar-Rahman" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(0)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[0] = el)}
                    src={"/assets/1. ar-rahman.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ar-Rahman</td>
                <td className="n-meaning">
                  (The Beneficent)
                  <p>He who wills goodness and mercy for all His creatures</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">2</td>
                <td className="arabic-name">
                  <img src={"/assets/name/2.webp"} alt="Ar-Raheem" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(1)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[1] = el)}
                    src={"/assets/2. ar-raheem.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ar-Raheem</td>
                <td className="n-meaning">
                  (The Merciful)
                  <p>He who acts with extreme kindness</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">3</td>
                <td className="arabic-name">
                  <img src={"/assets/name/3.webp"} alt="Ar-Malik" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(2)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[2] = el)}
                    src={"/assets/3. al-malik.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ar-Malik</td>
                <td className="n-meaning">
                  (The King)
                  <p>
                    The Sovereign Lord, The One with the complete Dominion, the
                    One Whose Dominion is clear from imperfection
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">4</td>
                <td className="arabic-name">
                  <img src={"/assets/name/4.webp"} alt="Al-Qaddus" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(3)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[3] = el)}
                    src={"/assets/4. al-qaddus.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Qaddus</td>
                <td className="n-meaning">
                  (The Most Sacred/The Most Holy)
                  <p>
                    The one who is pure, so far removed of any imperfection. He
                    has no shortcomings, evil is not attributed to Him
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">5</td>
                <td className="arabic-name">
                  <img src={"/assets/name/5.webp"} alt="As-Salam" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(4)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[4] = el)}
                    src={"/assets/5. as-salam.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">As-Salam</td>
                <td className="n-meaning">
                  (The Giver of Peace)
                  <p>The One who wills peace for all His creatures</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">6</td>
                <td className="arabic-name">
                  <img src={"/assets/name/6.webp"} alt="Al-Mumin" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(5)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[5] = el)}
                    src={"/assets/6. al-mumin.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mumin</td>
                <td className="n-meaning">
                  (The Infuser of Faith)
                  <p>
                    The One who bestows the gifts of security, and faith, and
                    removes fear from His creatures
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">7</td>
                <td className="arabic-name">
                  <img src={"/assets/name/7.webp"} alt="Al-Muhaymin" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(6)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[6] = el)}
                    src={"/assets/7. al-muhaymin.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muhaymin</td>
                <td className="n-meaning">
                  (The Guardian)
                  <p>
                    The One who witnesses the saying and deeds of His creatures
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">8</td>
                <td className="arabic-name">
                  <img src={"/assets/name/8.webp"} alt="Al-Aziz" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(7)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[7] = el)}
                    src={"/assets/8. al-aziz.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Aziz</td>
                <td className="n-meaning">
                  (The Almighty)
                  <p>
                    The Invincible, The One who is not subjected to the power of
                    another
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">9</td>
                <td className="arabic-name">
                  <img src={"/assets/name/9.webp"} alt="Al-Jabbar" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(8)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[8] = el)}
                    src={"/assets/9. al-jabbar.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Jabbar</td>
                <td className="n-meaning">
                  (The All Compelling)
                  <p>
                    The One that nothing happens in His Dominion except what He
                    will
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">10</td>
                <td className="arabic-name">
                  <img src={"/assets/name/10.webp"} alt="Al-Mutakabbir" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(9)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[9] = el)}
                    src={"/assets/10. al-mutakabbir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mutakabbir</td>
                <td className="n-meaning">
                  (The Supreme/ The Dominant One)
                  <p>
                    The One who is clear from the attributes of the creatures
                    and from resembling them
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">11</td>
                <td className="arabic-name">
                  <img src={"/assets/name/11.webp"} alt="AL-Khaliq" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(10)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[10] = el)}
                    src={"/assets/11. al-khaliq.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">AL-Khaliq</td>
                <td className="n-meaning">
                  (The Creator)
                  <p>The One who creates everything from nothing</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">12</td>
                <td className="arabic-name">
                  <img src={"/assets/name/12.webp"} alt="Al-Bari" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(11)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[11] = el)}
                    src={"/assets/12. al-bari.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Bari</td>
                <td className="n-meaning">
                  (The Evolver/ The Maker)
                  <p>
                    The Maker, The One who has the Power to turn the entities
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">13</td>
                <td className="arabic-name">
                  <img src={"/assets/name/13.webp"} alt="Al-Musawwir" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(12)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[12] = el)}
                    src={"/assets/13. al-musawwir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Musawwir</td>
                <td className="n-meaning">
                  (The Flawless Shaper)
                  <p>The One who forms His creatures in different shapes</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">14</td>
                <td className="arabic-name">
                  <img src={"/assets/name/14.webp"} alt="Al-Ghaffar" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(13)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[13] = el)}
                    src={"/assets/14. al-ghaffar.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Ghaffar</td>
                <td className="n-meaning">
                  (The Great Forgiver)
                  <p>He who wills forgiveness for all His creatures</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">15</td>
                <td className="arabic-name">
                  <img src={"/assets/name/15.webp"} alt="Al-Qahhar" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(14)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[14] = el)}
                    src={"/assets/15. al-qahhar.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Qahhar</td>
                <td className="n-meaning">
                  (The All-Prevailing One)
                  <p>
                    He who has the perfect Power and is not unable over anything
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">16</td>
                <td className="arabic-name">
                  <img src={"/assets/name/16.webp"} alt="Al-Wahhab" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(15)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[15] = el)}
                    src={"/assets/16. al-wahhab.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Wahhab</td>
                <td className="n-meaning">
                  (The Supreme Bestower)
                  <p>
                    The One who is Generous in giving plenty without any return.
                    He is everything that benefits whether Halal or Haram
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">17</td>
                <td className="arabic-name">
                  <img src={"/assets/name/17.webp"} alt="Ar-Razzaq" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(16)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[16] = el)}
                    src={"/assets/17. ar-razzaq.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ar-Razzaq</td>
                <td className="n-meaning">
                  (The Sustainer/ The Provider)
                  <p>The One who sustains and provides everything</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">18</td>
                <td className="arabic-name">
                  <img src={"/assets/name/18.webp"} alt="Al-Fattah" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(17)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[17] = el)}
                    src={"/assets/18. al-fattah.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Fattah</td>
                <td className="n-meaning">
                  (The Supreme Solver/ The Opener)
                  <p>
                    The Solver, The Reliever, The Judge, The One who opens all
                    doors of blessing for His creatures
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">19</td>
                <td className="arabic-name">
                  <img src={"/assets/name/19.webp"} alt="Al-Alim" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(18)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[18] = el)}
                    src={"/assets/19. al-alim.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Alim</td>
                <td className="n-meaning">
                  (The All Knowing One)
                  <p>
                    The Knowledgeable One, The One nothing is hidden from His
                    Knowledge
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">20</td>
                <td className="arabic-name">
                  <img src={"/assets/name/20.webp"} alt="Al-Qabid" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(19)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[19] = el)}
                    src={"/assets/20. al-qabid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Qabid</td>
                <td className="n-meaning">
                  (The Restricting One)
                  <p>
                    The Constrictor, The Withholder, The One who constricts the
                    sustenance by His wisdom and expands and widens it with His
                    Generosity and Mercy.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">21</td>
                <td className="arabic-name">
                  <img src={"/assets/name/21.webp"} alt="Al-Basit" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(20)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[20] = el)}
                    src={"/assets/21. al-basit.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Basit</td>
                <td className="n-meaning">
                  (The Extender)
                  <p>
                    The Englarger, The One who constricts the sustenance by His
                    wisdom and expands and widens it with His Generosity and
                    Mercy.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">22</td>
                <td className="arabic-name">
                  <img src={"/assets/name/22.webp"} alt="Al-Khafid" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(21)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[21] = el)}
                    src={"/assets/22. al-khafid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Khafid</td>
                <td className="n-meaning">
                  (The Reducer)
                  <p>
                    The Abaser, The One who lowers whoever He willed by His
                    Destruction and raises whoever He willed by His Endowment.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">23</td>
                <td className="arabic-name">
                  <img src={"/assets/name/23.webp"} alt="Ar-Rafi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(22)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[22] = el)}
                    src={"/assets/23. ar-rafi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ar-Rafi</td>
                <td className="n-meaning">
                  (The Elevating One)
                  <p>
                    The Exalter, The Elevator, The One who lowers whoever He
                    willed by His Destruction and raises whoever He willed by
                    His Endowment.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">24</td>
                <td className="arabic-name">
                  <img src={"/assets/name/24.webp"} alt="Al-Mu'izz" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(23)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[23] = el)}
                    src={"/assets/24. al-muizz.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mu'izz</td>
                <td className="n-meaning">
                  (The Honourer-Bestower)
                  <p>
                    e gives esteem to whoever He willed, hence there is no one
                    to degrade Him; And He degrades whoever He willed, hence
                    there is no one to give Him esteem.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">25</td>
                <td className="arabic-name">
                  <img src={"/assets/name/25.webp"} alt="Al-Muzil" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(24)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[24] = el)}
                    src={"/assets/25. al-mudhill.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muzil</td>
                <td className="n-meaning">
                  (The Abaser)
                  <p>
                    The Dishonourer, The Humiliator, He gives esteem to whoever
                    He willed, hence there is no one to degrade Him; And He
                    degrades whoever He willed, hence there is no one to give
                    Him esteem.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">26</td>
                <td className="arabic-name">
                  <img src={"/assets/name/26.webp"} alt="As-Sami" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(25)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[25] = el)}
                    src={"/assets/26. as-sami.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">As-Sami</td>
                <td className="n-meaning">
                  (The All-Hearer)
                  <p>
                    The Hearer, The One who Hears all things that are heard by
                    His Eternal Hearing without an ear, instrument or organ.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">27</td>
                <td className="arabic-name">
                  <img src={"/assets/name/27.webp"} alt="Al-Baseer" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(26)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[26] = el)}
                    src={"/assets/27. al-basir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Baseer</td>
                <td className="n-meaning">
                  (The All-Seeing)
                  <p>
                    The All-Noticing, The One who Sees all things that are seen
                    by His Eternal Seeing without a pupil or any other
                    instrument
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">28</td>
                <td className="arabic-name">
                  <img src={"/assets/name/28.webp"} alt="Al-Hakam" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(27)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[27] = el)}
                    src={"/assets/28. al-hakam.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Hakam</td>
                <td className="n-meaning">
                  (The Impartial Judge)
                  <p>
                    The Judge, He is the Ruler andThe Judge, He is the Ruler and
                    His judgment is His Word. His judgment is His Word
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">29</td>
                <td className="arabic-name">
                  <img src={"/assets/name/29.webp"} alt="Al-Adl" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(28)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[28] = el)}
                    src={"/assets/29. al-adl.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Adl</td>
                <td className="n-meaning">
                  (The Embodiment of Justice)
                  <p>The Just, The One who is entitled to do what He does</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">30</td>
                <td className="arabic-name">
                  <img src={"/assets/name/30.webp"} alt="Al-Latif" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(29)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[29] = el)}
                    src={"/assets/30. al-latif.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Lateef</td>
                <td className="n-meaning">
                  (The Knower of Subtleties)
                  <p>
                    The Subtle One, The Gracious, The One who is kind to His
                    slaves and endows upon them.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">31</td>
                <td className="arabic-name">
                  <img src={"/assets/name/31.webp"} alt="Al-Khabir" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(30)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[30] = el)}
                    src={"/assets/31. al-khabir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Khabir</td>
                <td className="n-meaning">
                  (The All-Aware One)
                  <p>The One who knows the truth of things.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">32</td>
                <td className="arabic-name">
                  <img src={"/assets/name/32.webp"} alt="Al-Halim" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(31)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[31] = el)}
                    src={"/assets/32. al-halim.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Haleem</td>
                <td className="n-meaning">
                  (The Clement One)
                  <p>
                    The Forebearing, The One who delays the punishment for those
                    who deserve it and then He might forgive them
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">33</td>
                <td className="arabic-name">
                  <img src={"/assets/name/33.webp"} alt="Al-Azeem" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(32)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[32] = el)}
                    src={"/assets/33. al-azeem.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Azeem</td>
                <td className="n-meaning">
                  (The Magnificent One)
                  <p>
                    The Great One, The Mighty, The One deserving the attributes
                    of Exaltment, Glory, Extolement, and Purity from all
                    imperfection.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">34</td>
                <td className="arabic-name">
                  <img src={"/assets/name/34.webp"} alt="Al-Ghafoor" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(33)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[33] = el)}
                    src={"/assets/34. al-ghafur.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Ghafoor</td>
                <td className="n-meaning">
                  (The All-Forgiving)
                  <p>
                    The All-Forgiving, The Forgiving, The One who forgives a
                    lot.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">35</td>
                <td className="arabic-name">
                  <img src={"/assets/name/35.webp"} alt="Ash-Shakur" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(34)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[34] = el)}
                    src={"/assets/35. ash-shakur.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ash-Shakur</td>
                <td className="n-meaning">
                  (The Acknowledging One)
                  <p>
                    The Grateful, The Appreciative, The One who gives a lot of
                    reward for a little obedience.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">36</td>
                <td className="arabic-name">
                  <img src={"/assets/name/36.webp"} alt="Al-Aliyy" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(35)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[35] = el)}
                    src={"/assets/36. al-ali.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Aliyy</td>
                <td className="n-meaning">
                  (The Sublime One)
                  <p>
                    The Most High, The One who is clear from the attributes of
                    the creatures
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">37</td>
                <td className="arabic-name">
                  <img src={"/assets/name/37.webp"} alt="Al-Kabeer" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(36)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[36] = el)}
                    src={"/assets/37. al-kabir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Kabeer</td>
                <td className="n-meaning">
                  (The Great One)
                  <p>
                    The Most Great, The Great, The One who is greater than
                    everything in status.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">38</td>
                <td className="arabic-name">
                  <img src={"/assets/name/38.webp"} alt="Al-Hafiz" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(37)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[37] = el)}
                    src={"/assets/38. al-hafiz.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Hafiz</td>
                <td className="n-meaning">
                  (The Guarding One)
                  <p>
                    The Preserver, The Protector, The One who protects whatever
                    and whoever He willed to protect.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">39</td>
                <td className="arabic-name">
                  <img src={"/assets/name/39.webp"} alt="Al-Muqeet" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(38)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[38] = el)}
                    src={"/assets/39. al-muqit.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muqeet</td>
                <td className="n-meaning">
                  (The Sustaining One)
                  <p>
                    The Maintainer, The Guardian, The Feeder, The One who has
                    the Power.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">40</td>
                <td className="arabic-name">
                  <img src={"/assets/name/40.webp"} alt="Al-Haseeb" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(39)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[39] = el)}
                    src={"/assets/40. al-hasib.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Haseeb</td>
                <td className="n-meaning">
                  (The Reckoning One)
                  <p>The Reckoner, The One who gives the satisfaction.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">41</td>
                <td className="arabic-name">
                  <img src={"/assets/name/41.webp"} alt="Al-Jaleel" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(40)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[40] = el)}
                    src={"/assets/41. al-jalil.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Jaleel</td>
                <td className="n-meaning">
                  (The Majestic One)
                  <p>
                    The Sublime One, The Beneficent, The One who is attributed
                    with greatness of Power and Glory of status.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">42</td>
                <td className="arabic-name">
                  <img src={"/assets/name/42.webp"} alt="Al-Karim" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(41)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[41] = el)}
                    src={"/assets/42. al-karim.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Karim</td>
                <td className="n-meaning">
                  (The Bountiful One)
                  <p>
                    The Generous One, The Gracious, The One who is attributed
                    with greatness of Power and Glory of status.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">43</td>
                <td className="arabic-name">
                  <img src={"/assets/name/43.webp"} alt="Ar-Raqib" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(42)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[42] = el)}
                    src={"/assets/43. ar-raqib.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ar-Raqib</td>
                <td className="n-meaning">
                  (The Watchful One)
                  <p>
                    The Watcher, The One that nothing is absent from Him. Hence,
                    it’s meaning is related to attribute of Knowledge.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">44</td>
                <td className="arabic-name">
                  <img src={"/assets/name/44.webp"} alt="Al-Mujeeb" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(43)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[43] = el)}
                    src={"/assets/44. al-mujib.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mujeeb</td>
                <td className="n-meaning">
                  (The Responding One)
                  <p>
                    The Responsive, The Hearkener, The One who answers the one
                    in need if he asks Him and rescues the yearned if he calls
                    upon Him.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">45</td>
                <td className="arabic-name">
                  <img src={"/assets/name/45.webp"} alt="Al-Wasi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(44)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[44] = el)}
                    src={"/assets/45. al-wasi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Wasi</td>
                <td className="n-meaning">
                  (The All-Pervading One)
                  <p>The Vast, The All-Embracing, The Knowledgeable.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">46</td>
                <td className="arabic-name">
                  <img src={"/assets/name/46.webp"} alt="Al-Hakeem" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(45)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[45] = el)}
                    src={"/assets/46. al-hakim.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Hakeem</td>
                <td className="n-meaning">
                  (The Wise One)
                  <p>
                    The Wise, The Judge of Judges, The One who is correct in His
                    doings.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">47</td>
                <td className="arabic-name">
                  <img src={"/assets/name/47.webp"} alt="Al-Wadood" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(46)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[46] = el)}
                    src={"/assets/47. al-wadud.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Wadood</td>
                <td className="n-meaning">
                  (The Loving One)
                  <p>The Most Loving, The Most Affectionate, The Beloved</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">48</td>
                <td className="arabic-name">
                  <img src={"/assets/name/48.webp"} alt="Al-Majeed" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(47)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[47] = el)}
                    src={"/assets/48. al-majid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Majeed</td>
                <td className="n-meaning">
                  (The Glorious One)
                  <p>
                    The Most Glorious One, The One who is with perfect Power,
                    High Status, Compassion, Generosity and Kindness.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">49</td>
                <td className="arabic-name">
                  <img src={"/assets/name/49.webp"} alt="Al-Ba'ith" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(48)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[48] = el)}
                    src={"/assets/49. al-baith.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Ba'ith</td>
                <td className="n-meaning">
                  (The Infuser of New Life )
                  <p>The Awakener, The Resurrector, The Arouser</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">50</td>
                <td className="arabic-name">
                  <img src={"/assets/name/50.webp"} alt="Ash-Shaheed" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(49)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[49] = el)}
                    src={"/assets/50. ash-shahid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ash-Shaheed</td>
                <td className="n-meaning">
                  (The All Observing Witness)
                  <p>The Witness, The One who nothing is absent from Him.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">51</td>
                <td className="arabic-name">
                  <img src={"/assets/name/51.webp"} alt="Al-Haqq" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(50)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[50] = el)}
                    src={"/assets/51. al-haqq.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Haqq</td>
                <td className="n-meaning">
                  (The Embodiment of Truth)
                  <p>The Truth, The True, The One who truly exists.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">52</td>
                <td className="arabic-name">
                  <img src={"/assets/name/52.webp"} alt="Al-Wakeel" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(51)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[51] = el)}
                    src={"/assets/52. al-wakeel.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Wakeel</td>
                <td className="n-meaning">
                  (The Universal Trustee)
                  <p>
                    The Trustee, The One who gives the satisfaction and is
                    relied upon.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">53</td>
                <td className="arabic-name">
                  <img src={"/assets/name/53.webp"} alt="Al-Qawiyy" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(52)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[52] = el)}
                    src={"/assets/53. al-qawi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Qawiyy</td>
                <td className="n-meaning">
                  (The Strong One)
                  <p>
                    The Most Strong, The Strong, The One with the complete
                    Power.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">54</td>
                <td className="arabic-name">
                  <img src={"/assets/name/54.webp"} alt="Al-Matin" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(53)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[53] = el)}
                    src={"/assets/54. al-matin.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Matin</td>
                <td className="n-meaning">
                  (The Firm One)
                  <p>
                    The One with extreme Power which is un-interrupted and He
                    does not get tired.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">55</td>
                <td className="arabic-name">
                  <img src={"/assets/name/55.webp"} alt="Al-Waliy" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(54)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[54] = el)}
                    src={"/assets/55. al-waliyy.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Waliy</td>
                <td className="n-meaning">
                  (The Protecting Associate)
                  <p>The Protecting Friend, The Supporter.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">56</td>
                <td className="arabic-name">
                  <img src={"/assets/name/56.webp"} alt="Al-Hameed" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(55)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[55] = el)}
                    src={"/assets/56. al-hamid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Hameed</td>
                <td className="n-meaning">
                  (The Sole-Laudable One)
                  <p>
                    The Praiseworthy, The praised One who deserves to be praised
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">57</td>
                <td className="arabic-name">
                  <img src={"/assets/name/57.webp"} alt="Al-Muhsi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(56)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[56] = el)}
                    src={"/assets/57. al-muhsi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muhsi</td>
                <td className="n-meaning">
                  (The All-Enumerating One)
                  <p>
                    The Counter, The Reckoner, The One who the count of things
                    are known to him.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">58</td>
                <td className="arabic-name">
                  <img src={"/assets/name/58.webp"} alt="Al-Mubdi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(57)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[57] = el)}
                    src={"/assets/58. al-mubdi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mubdi</td>
                <td className="n-meaning">
                  (The Originator)
                  <p>
                    The One who started the human being. That is, He created
                    him.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">59</td>
                <td className="arabic-name">
                  <img src={"/assets/name/59.webp"} alt="Al-Muid" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(58)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[58] = el)}
                    src={"/assets/59. al-muid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muid</td>
                <td className="n-meaning">
                  (The Restorer)
                  <p>
                    The Reproducer, The One who brings back the creatures after
                    death.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">60</td>
                <td className="arabic-name">
                  <img src={"/assets/name/60.webp"} alt="Al-Muhyi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(59)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[59] = el)}
                    src={"/assets/60. al-muhyi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muhyi</td>
                <td className="n-meaning">
                  (The Maintainer of life)
                  <p>The Restorer, The Giver of Life.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">61</td>
                <td className="arabic-name">
                  <img src={"/assets/name/61.webp"} alt="Al-Mumeet" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(60)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[60] = el)}
                    src={"/assets/61. al-mumit.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mumeet</td>
                <td className="n-meaning">
                  (The Inflictor of Death)
                  <p>
                    The Creator of Death, The Destroyer, The One who renders the
                    living dead.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">62</td>
                <td className="arabic-name">
                  <img src={"/assets/name/62.webp"} alt="Al-Hayy" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(61)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[61] = el)}
                    src={"/assets/62. al-hayy.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Hayy</td>
                <td className="n-meaning">
                  (The Eternally Living One)
                  <p>
                    The Alive, The One attributed with a life that is unlike our
                    life and is not that of a combination of soul, flesh or
                    blood..
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">63</td>
                <td className="arabic-name">
                  <img src={"/assets/name/63.webp"} alt="Al-Qayyum" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(62)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[62] = el)}
                    src={"/assets/63. al-qayyum.mp3"}
                  ></audio>
                </td>
                <td className="transliteration"> Al-Qayyum</td>
                <td className="n-meaning">
                  (The Self-Subsisting One)
                  <p>
                    The Self-Subsisting, The Self-Existing One upon Whom all
                    others depend
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">64</td>
                <td className="arabic-name">
                  <img src={"/assets/name/64.webp"} alt="Al-Wajid" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(63)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[63] = el)}
                    src={"/assets/64. al-wajid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration"> Al-Wajid</td>
                <td className="n-meaning">
                  (The Pointing One)
                  <p>
                    The Perceiver, The Finder, The Rich who is never poor.
                    Al-Wajid is Richness.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">65</td>
                <td className="arabic-name">
                  <img src={"/assets/name/65.webp"} alt="Al-Maajid" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(64)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[64] = el)}
                    src={"/assets/65. al-majid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Maajid</td>
                <td className="n-meaning">
                  (The All-Noble One)
                  <p>The Glorious, He who is Most Glorious.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">66</td>
                <td className="arabic-name">
                  <img src={"/assets/name/66.webp"} alt="Al-Wahid" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(65)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[65] = el)}
                    src={"/assets/66. al-wahid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Wahid</td>
                <td className="n-meaning">
                  (The Only One)
                  <p>The Unique, The One, The One without a partner.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">67</td>
                <td className="arabic-name">
                  <img src={"/assets/name/67.webp"} alt="Al-Ahad" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(66)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "2.5rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[66] = el)}
                    src={"/assets/67. al-ahad.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Ahad</td>
                <td className="n-meaning">
                  (The Sole One)
                  <p>The One.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">68</td>
                <td className="arabic-name">
                  <img src={"/assets/name/68.webp"} alt="As-Samad" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(67)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                   
                    ref={(el) => (audioRefs.current[67] = el)}
                    src={"/assets/68. as-samad.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">As-Samad</td>
                <td className="n-meaning">
                  (The Supreme Provider)
                  <p>
                    The Eternal, The Independent, The Master who is relied upon
                    in matters and reverted to in ones needs. He is the only one
                    a person should turn to when feeling helpless.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">69</td>
                <td className="arabic-name">
                  <img src={"/assets/name/69.webp"} alt="Al-Qadir" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(68)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[68] = el)}
                    src={"/assets/69. al-qadir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Qadir</td>
                <td className="n-meaning">
                  (The All-Powerful)
                  <p>The Able, The Capable, The One attributed with Power.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">70</td>
                <td className="arabic-name">
                  <img src={"/assets/name/70.webp"} alt="Al-Muqtadir" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(69)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[69] = el)}
                    src={"/assets/70. al-muqtadir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muqtadir</td>
                <td className="n-meaning">
                                   (The All Authoritative One)t
                  <p>
                    The Powerful, The Dominant, The One with the perfect Power
                    that nothing is withheld from Him.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">71</td>
                <td className="arabic-name">
                  <img src={"/assets/name/71.webp"} alt="Al-Muqaddim" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(70)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[70] = el)}
                    src={"/assets/71. al-muqaddim.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muqaddim</td>
                <td className="n-meaning">
                  (The Expediting One)
                  <p>
                    The Expediter, The Promoter, The One who puts things in
                    their right places.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">72</td>
                <td className="arabic-name">
                  <img src={"/assets/name/72.webp"} alt="Al-Muakhkhir" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(71)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[71] = el)}
                    src={"/assets/72. al-muakhkhir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration"> Al-Muakhkhir</td>
                <td className="n-meaning">
                  (The Delayer)
                  <p>
                    The Postponer, He Who Puts Far Away. He makes ahead what He
                    wills and delays what He wills.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">73</td>
                <td className="arabic-name">
                  <img src={"/assets/name/73.webp"} alt="Al-Awwal" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(72)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[72] = el)}
                    src={"/assets/73. al-awwal.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Awwal</td>
                <td className="n-meaning">
                  (The Very First)
                  <p>
                    he First, The One whose Existence is without a beginning.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">74</td>
                <td className="arabic-name">
                  <img src={"/assets/name/74.webp"} alt="Al-Akhir" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(73)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[73] = el)}
                    src={"/assets/74. al-akhir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Akhir</td>
                <td className="n-meaning">
                  (The Infinite Last One)
                  <p>The Last, The One whose Existence is without an end.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">75</td>
                <td className="arabic-name">
                  <img src={"/assets/name/75.webp"} alt="Az-Zaahir" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(74)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[74] = el)}
                    src={"/assets/75. az-zahir.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Az-Zaahir</td>
                <td className="n-meaning">
                  (The Perceptible)
                  <p>The Manifest, The Conspicuous, The Evident</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">76</td>
                <td className="arabic-name">
                  <img src={"/assets/name/76.webp"} alt="Al-Batin" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(75)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[75] = el)}
                    src={"/assets/76. al-batin.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Baatin</td>
                <td className="n-meaning">
                  (The Imperceptible)
                  <p>
                    The Hidden, The Secret One, The Inner One, The Knower of
                    Hidden Things
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">77</td>
                <td className="arabic-name">
                  <img src={"/assets/name/77.webp"} alt="Al-Wali" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(76)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[76] = el)}
                    src={"/assets/77. al-wali.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Wali</td>
                <td className="n-meaning">
                  (The Holder of Supreme Authority)
                  <p>The Governor, The One who owns things and manages them.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">78</td>
                <td className="arabic-name">
                  <img src={"/assets/name/78.webp"} alt="Al-Mutaali" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(77)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[77] = el)}
                    src={"/assets/78. al-muta-ali.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mutaali</td>
                <td className="n-meaning">
                  (The Extremely Exalted One)
                  <p>
                    The Most Exalted, The High Exalted, The One who is clear
                    from the attributes of the creation.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">79</td>
                <td className="arabic-name">
                  <img src={"/assets/name/79.webp"} alt="Al-Barr" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(78)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[78] = el)}
                    src={"/assets/79. al-barr.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Barr</td>
                <td className="n-meaning">
                  (The Fountain-Head of Truth)
                  <p>
                    The Source of All Goodness, The Righteous, The One who is
                    kind to His creatures
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">80</td>
                <td className="arabic-name">
                  <img src={"/assets/name/80.webp"} alt="At-Tawwab" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(79)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[79] = el)}
                    src={"/assets/80. at-tawwab.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">At-Tawwab</td>
                <td className="n-meaning">
                  (The Ever-Acceptor of Repentance)
                  <p>
                    The Acceptor of Repentance, The Oft-Forgiving, The Acceptor
                    of our Return
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">81</td>
                <td className="arabic-name">
                  <img src={"/assets/name/81.webp"} alt="Al-Muntaqim" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(80)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[80] = el)}
                    src={"/assets/81. al-muntaqim.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muntaqim</td>
                <td className="n-meaning">
                  (The Retaliator)
                  <p>
                    The Avenger, The Disapprover, The Inflictor of Retribution
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">82</td>
                <td className="arabic-name">
                  <img src={"/assets/name/82.webp"} alt="Al-Afuw" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(81)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[81] = el)}
                    src={"/assets/82. al-afuw.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Afuw</td>
                <td className="n-meaning">
                  (The Supreme Pardoner)
                  <p>The Pardoner, The Forgiver and The Eliminator of Sins.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">83</td>
                <td className="arabic-name">
                  <img src={"/assets/name/83.webp"} alt="Ar-Rauf" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(82)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[82] = el)}
                    src={"/assets/83. ar-rauf.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ar-Rauf</td>
                <td className="n-meaning">
                  (The Benign One)
                  <p>
                    The Most Kind, The Tenderly Merciful, The Clement and
                    Compassionate
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">84</td>
                <td className="arabic-name">
                  <img src={"/assets/name/84.webp"} alt="Malikul-Mulk" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(83)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[83] = el)}
                    src={"/assets/84. malikul mulk.mp4"}
                  ></audio>
                </td>
                <td className="transliteration">Malikul-Mulk</td>
                <td className="n-meaning">
                  (The Eternal Possessor of Sovereignty)
                  <p>
                    The One who controls the Dominion and gives dominion to
                    whoever He willed.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">85</td>
                <td className="arabic-name">
                  <img src={"/assets/name/85.webp"} alt="Dhul-Jalaali-Wal-Ikram" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(84)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[84] = el)}
                    src={"/assets/85. dhul-jalali-wal-ikram.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Dhul-Jalaali-Wal-Ikram</td>
                <td className="n-meaning">
                  (The Possessor of Majesty and Honour)
                  <p>The Lord of Majesty and Bounty.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">86</td>
                <td className="arabic-name">
                  <img src={"/assets/name/86.webp"} alt="Al-Muqsit" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(85)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[85] = el)}
                    src={"/assets/86. al-muqsit.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Muqsit</td>
                <td className="n-meaning">
                  (The Just One)
                  <p>The Equitable, The One who is Just in His judgment.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">87</td>
                <td className="arabic-name">
                  <img src={"/assets/name/87.webp"} alt="Al-Jami" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(86)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[86] = el)}
                    src={"/assets/87. al-jami.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Jami</td>
                <td className="n-meaning">
                  (The Assembler of Scattered Creations)
                  <p>
                    The Gatherer, The One who gathers the creatures on a day
                    that there is no doubt about, that is the Day of Judgment.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">88</td>
                <td className="arabic-name">
                  <img src={"/assets/name/88.webp"} alt="Al-Ghaniy" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(87)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[87] = el)}
                    src={"/assets/88. al-ghaniyy.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Ghaniy</td>
                <td className="n-meaning">
                  (The Self-Sufficient One)
                  <p>The One who does not need the creation.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">89</td>
                <td className="arabic-name">
                  <img src={"/assets/name/89.webp"} alt="Al-Mughni" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(88)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[88] = el)}
                    src={"/assets/89. al-mughni.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mughni</td>
                <td className="n-meaning">
                  (The Enricher)
                  <p>
                    The Emancipator, The Fulfiller of Needs, The Bestower of
                    Wealth.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">90</td>
                <td className="arabic-name">
                  <img src={"/assets/name/90.webp"} alt="Al-Mani" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(89)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[89] = el)}
                    src={"/assets/90. al-mani.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Mani</td>
                <td className="n-meaning">
                  (The Preventer)
                  <p>The Withholder.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">91</td>
                <td className="arabic-name">
                  <img src={"/assets/name/91.webp"} alt="Ad-Darr" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(90)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[90] = el)}
                    src={"/assets/91. ad-darr.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ad-Darr</td>
                <td className="n-meaning">
                  (The Distressor)
                  <p>
                    The Correcter, The Balancer, The Distresser, The Afflicter,
                    The Punisher.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">92</td>
                <td className="arabic-name">
                  <img src={"/assets/name/92.webp"} alt="An-Naafi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(91)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[91] = el)}
                    src={"/assets/92. an-nafi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">An-Naafi</td>
                <td className="n-meaning">
                  (The Bestower of Benefits)
                  <p>
                    The Creator of Good, The Benefiter, The Propitious, The
                    Auspicious
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">93</td>
                <td className="arabic-name">
                  <img src={"/assets/name/93.webp"} alt="An-Noor" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(92)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[92] = el)}
                    src={"/assets/93. an-nur.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">An-Noor</td>
                <td className="n-meaning">
                  (The Prime Light)
                  <p>The Light, The One who guides.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">94</td>
                <td className="arabic-name">
                  <img src={"/assets/name/94.webp"} alt="Al-Hadi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(93)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[93] = el)}
                    src={"/assets/94. al-hadi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Hadi</td>
                <td className="n-meaning">
                  (The Provider of Guidance)
                  <p>The Guide, The Leader, The Guide of the Right Path</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">95</td>
                <td className="arabic-name">
                  <img src={"/assets/name/95.webp"} alt="Al-Badi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(94)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[94] = el)}
                    src={"/assets/95. al-badi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Badi</td>
                <td className="n-meaning">
                  (The Unique One)
                  <p>
                    The Wonderful Originator, The Unprecedented and Incomparable
                    Inventor
                  </p>
                </td>
              </tr>
              <tr>
                <td className="n-number">96</td>
                <td className="arabic-name">
                  <img src={"/assets/name/96.webp"} alt="Al-Baaqi" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(95)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[95] = el)}
                    src={"/assets/96. al-baqi.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Baaqi</td>
                <td className="n-meaning">
                  (The Ever Surviving One)
                  <p>The Everlasting, The Ever-Enduring, The Ever-Present</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">97</td>
                <td className="arabic-name">
                  <img src={"/assets/name/97.webp"} alt="Al-Warith" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(96)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[96] = el)}
                    src={"/assets/97.al-warith.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Al-Warith</td>
                <td className="n-meaning">
                  (The Eternal Inheritor)
                  <p>The Heir, The One whose Existence remains.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">98</td>
                <td className="arabic-name">
                  <img src={"/assets/name/98.webp"} alt="Ar-Rasheed" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(97)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[97] = el)}
                    src={"/assets/98. ar-rashid.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">Ar-Rasheed</td>
                <td className="n-meaning">
                  (The Guide to Path of Rectitude)
                  <p>The Guide to the Right Path, The One who guides.</p>
                </td>
              </tr>
              <tr>
                <td className="n-number">99</td>
                <td className="arabic-name">
                  <img src={"/assets/name/99.webp"} alt="As-Sabur" />
                </td>
                <td className="audio-name">
                  <button
                    onClick={() => handlePlayAudio(98)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: "#606163",
                    }}
                  >
                    <MdVolumeUp />
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[98] = el)}
                    src={"/assets/99. as-sabur.mp3"}
                  ></audio>
                </td>
                <td className="transliteration">As-Sabur</td>
                <td className="n-meaning">
                  (The Extensively Enduring One)
                  <p>
                    {" "}
                    (The Extensively Enduring One) The Patient, The One who does
                    not quickly punish the sinners.
                  </p>
                </td>
              </tr>
              {/* Add more names as needed */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default NamesofAllah;
