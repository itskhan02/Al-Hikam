import axios from "axios";

// 1. Get all Surahs
export const getSurahs = async () => {
  const response = await axios.get("https://api.alquran.cloud/v1/surah");
  return response.data.data.map((surah) => ({
    id: surah.number,
    name_simple: surah.englishName,
    translated_name: { name: surah.englishNameTranslation },
  })); 
};

// 2. Get verses with translation, transliteration, and audio
export const getSurahVerses = async (surahId) => {
  try {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-simple,en.pickthall,en.transliteration`
    );
    const [arabicVerses, translatedVerses, transliterationVerses] = response.data.data;

    return arabicVerses.ayahs.map((verse, index) => ({
      id: verse.number,
      arabic: verse.text,
      translation: translatedVerses.ayahs[index]?.text || '', // Ensure translation is included
      transliteration: transliterationVerses.ayahs[index]?.text || '', // Include transliteration
    }));
  } catch (error) {
    console.error('Error fetching Surah verses:', error);
    return [];
  }
};

// 3. Fetch reciters dynamically with fallback
export const getReciters = async () => {
  try {
    const response = await axios.get("https://api.example.com/reciters"); //
    return response.data.reciters.map((reciter) => ({
      id: reciter.id,
      name: reciter.name,
      baseUrl: reciter.audioUrl,
    }));
  } catch (error) {
    console.error("Error fetching reciters:", error);
    return [
      {
        id: "ar.alafasy",
        name: "Mishary Alafasy",
        baseUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/",
      },
      {
        id: "ar.abdulsamad",
        name: "Abdul Basit",
        baseUrl: "https://cdn.islamic.network/quran/audio/128/ar.abdulsamad/",
      },
      {
        id: "ar.husary",
        name: "Mahmoud Al-Husary",
        baseUrl: "https://cdn.islamic.network/quran/audio/128/ar.husary/",
      },
      {
        id: "ar.shatri",
        name: "Abu Bakr Al-Shatri",
        baseUrl: "https://cdn.islamic.network/quran/audio/128/ar.shatri/",
      },
      {
        id: "ar.sudais",
        name: "Abdul Rahman Al-Sudais",
        baseUrl: "https://cdn.islamic.network/quran/audio/128/ar.sudais/",
      },
      {
        id: "ar.muayqili",
        name: "Maher Al-Muayqili",
        baseUrl: "https://cdn.islamic.network/quran/audio/128/ar.muayqili/",
      },
    ];
  }
};

// 4. Fetch reciters from the API
export const fetchReciters = async () => {
  try {
    const response = await axios.get("https://mp3quran.net/api/_english.php"); 
    if (response.data && response.data.reciters) {
      return response.data.reciters.map((reciter) => ({
        id: reciter.id,
        name: reciter.name,
        Server: reciter.Server, // Audio server URL
      }));
    } else {
      console.error("Invalid API response:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching reciters:", error);
    return [];
  }
};

export const fetchChapterDetails = async (chapterId) => {
  try {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/surah/${chapterId}/editions/quran-simple,en.pickthall`
    ); 
    if (response.data && response.data.data) {
      const [arabicData, translationData] = response.data.data; // translation data
      return {
        arabic_text: arabicData.ayahs.map((ayah) => ayah.text).join(" "), 
        transliteration: "", 
        translation: translationData.ayahs.map((ayah) => ayah.text).join(" "), 
        
      };
    } else {
      throw new Error("Invalid API response");
    }
  } catch (error) {
    console.error("Error fetching chapter details:", error);
    return null;
  }
};
