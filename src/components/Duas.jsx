const allDuas = [
  {
    id: 1,
    title: "Supplication Before Sleeping",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوْتُ وَأَحْيَا",
    transliteration: "bismika, allahumma amuutu wa ahyaa",
    translation: "In Your name, O Allah, I die and I live.",
    benefits: "The Prophet, peace and blessings be upon him, always started and ended his day with dhikr.",
    reference: "HR. al-Bukhari",
    category: "sleep"
  },
  {
    id: 2,
    title: "Supplication Upon Waking Up",
    arabic: "الحَمْدُ للهِ الَّذِي أَحْيَانَا بعْدَ مَا أماتَنَا وإِلَيْهِ النُّشُورُ",
    transliteration: "alhamdulillahilladzi ahyaanaa ba'da maa amaatanaa wa ilaihin nusyuur",
    translation: "All praise is for Allah who gives us life after He has caused us to die, and to Him is the resurrection.",
    benefits: "By reciting this supplication, a servant begins their day by praising the name of Allah, the Giver of Life and the Bringer of Death.",
    reference: "HR. Bukhari: 6327",
    category: "morning"
  },
  {
    id: 3,
    title: "Supplication Entering the Bathroom",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "allahumma innii a'uudzubika minal khubutsi wal khabaaitsi",
    translation: "O Allah, I seek refuge in You from the evil and the wicked.",
    benefits: "This supplication acts as a barrier between a servant's private parts and the jinn when entering the bathroom.",
    reference: "HR. al-Bukhari and Muslim",
    category: "bathroom"
  },
  {
    id: 4,
    title: "Prayer for Forgiveness for Parents",
    arabic: "رَبَّنَا ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ",
    transliteration: "rabbanagfir lii wa liwaalidayya wa lil-mu'miniina yauma yaquumul-hiisaab",
    translation: "Our Lord, forgive me and my parents and all the believers on the Day the account is established.",
    benefits: "This prayer teaches us to honor and love our parents, remember the Day of Judgment, and care for fellow believers.",
    reference: "QS. Ibrahim: 41",
    category: "family"
  },
  {
    id: 5,
    title: "Supplication Before Eating",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "bismillah",
    translation: "In the name of Allah.",
    benefits: "Reciting Bismillah before eating prevents Satan from joining humans in eating.",
    reference: "HR. al-Bukhari No. 5376 and Muslim No. 2022",
    category: "eating"
  },
  {
    id: 6,
    title: "Supplication If Forgetting Bismillah at the Beginning of a Meal",
    arabic: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ",
    transliteration: "bismillahi awwaluhu wa aakhiruhu",
    translation: "In the name of Allah, at its beginning and its end.",
    benefits: "If someone forgets to recite the supplication before eating, it is still recommended to recite it in the middle.",
    reference: "HR. Abu Dawud",
    category: "eating"
  },
  {
    id: 7,
    title: "Supplication After Eating",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِى أَطْعَمَنِى هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّى وَلاَ قُوَّةٍ",
    transliteration: "alhamdulillaahilladzii ath'amanii haadzaa wa rozaqoniihi min ghoiri haulin minnii wa laa quwwatin",
    translation: "All praise is to Allah who has fed me this and provided for me without any power or strength from me.",
    benefits: "The Messenger of Allah, peace and blessings be upon him, said that if someone recites this supplication, then his past sins will be forgiven.",
    reference: "Shahih at-Tirmidzi",
    category: "eating"
  },
  {
    id: 8,
    title: "Supplication Entering the Mosque",
    arabic: "اَللَّهُمَّ افْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ",
    transliteration: "allahummaftah lii abwaaba rahmatika",
    translation: "O Allah, open the doors of Your mercy for me.",
    benefits: "The mosque is the house of Allah; a servant should honor it and hope for Allah's mercy within it.",
    reference: "HR. Muslim",
    category: "prayer"
  },
  {
    id: 9,
    title: "Supplication Leaving the Mosque",
    arabic: "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "allahumma innii as'aluka min fadhlika",
    translation: "O Allah, I ask You for Your bounty.",
    benefits: "Allah's earth is vast, and there are many ways to seek provision. A servant should ask for Allah's bounty to be facilitated in obtaining the provision that Allah has distributed to all His servants.",
    reference: "HR. Muslim No. 713",
    category: "prayer"
  },
  {
    id: 10,
    title: "Supplication Before Performing Ablution",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "bismillah",
    translation: "In the name of Allah.",
    benefits: "It is prescribed to begin every important matter by saying Bismillah, whether it be an act of worship or otherwise.",
    reference: "HR. at-Tirmidzi and al-Baihaqi",
    category: "prayer"
  },
  {
    id: 11,
    title: "Supplication After Performing Ablution",
    arabic: "أشْهَدُ أنْ لا إله إِلاَّ اللَّهُ وَحْدَهُ لا شَرِيك لَهُ ، وأشْهَدُ أنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ ، اللَّهُمَّ اجْعَلْنِي مِنَ التَوَّابِينَ ، واجْعَلْني مِنَ المُتَطَهِّرِينَ ، سُبْحانَكَ اللَّهُمَّ وبِحَمْدِكَ ، أشْهَدُ أنْ لا إلهَ إِلاَّ أنْتَ ، أسْتَغْفِرُكَ وأتُوبُ إِلَيْكَ",
    transliteration: "asyhadu an laa ilaaha illa allah wadahu laa syariika lahu, wa asyhadu anna muhammadan 'abduhu wa rasuuluhu. allahummaj 'alni minat tawwaabiina waj 'alnii minal mutathaahiriina. subhaanaka allahumma wa bihamdika asyhadu an laa ilaaha illa anta astaghfiruka wa atuubu ilaika",
    translation: "I bear witness that there is no deity except Allah alone, with no partner, and I bear witness that Muhammad is His servant and Messenger. O Allah, make me among those who repent and make me among those who purify themselves. Glory be to You, O Allah, and with Your praise, I bear witness that there is no deity except You. I seek Your forgiveness and repent to You.",
    benefits: "Whoever recites this supplication, eight gates of Paradise will be opened for him, and he may enter from whichever gate he wishes.",
    reference: "HR. Muslim, at-Tirmidzi and an-Nasa'i",
    category: "prayer"
  },
  {
    id: 12,
    title: "Supplication for Breaking the Fast",
    arabic: "ذَهَبَ الظَّمَأُ وابْتَلَّتِ الْعُرُوقُ وثَبَتَ اْلأَجْرُ إِنْ شَاءَاللهُ",
    transliteration: "dzahabazh zhoma'u wabtallatil 'uruqu wa tsabatal ajru insya Allah",
    translation: "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
    benefits: "It is highly recommended for those who are fasting to increase their supplications before and after breaking the fast, because the supplication of a fasting person is one of the three supplications that are not rejected.",
    reference: "HR. Abu Daud, As-Sunan Al-Kubra Lil Baihaqi, Vol. 4, p. 239, al-Hakim in Mustadrak 'alas Shahihain No. 1484",
    category: "eating"
  },
  {
    id: 13,
    title: "Supplication Entering the House #1",
    arabic: "اَلسَّلَامُ عَلَيْكُمْ",
    transliteration: "assalaamu 'alaykum",
    translation: "Peace be upon you.",
    benefits: "The greeting is a supplication of hope, a hope that you will be safe from all kinds of sorrow and suffering, and be enveloped in mercy and blessings.",
    reference: "HR. at-Tirmidzi",
    category: "home"
  },
  {
    id: 14,
    title: "Supplication Entering the House #2",
    arabic: "اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ",
    transliteration: "assalaamu 'alaykum warahmatullaahi wabarakaatuh",
    translation: "Peace, mercy, and blessings of Allah be upon you.",
    benefits: "The greeting is a supplication of hope, a hope that you will be safe from all kinds of sorrow and suffering, and be enveloped in mercy and blessings.",
    reference: "HR. at-Tirmidzi",
    category: "home"
  },
  {
    id: 15,
    title: "Supplication Leaving the House",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "bismillaah, tawakkaltu 'alallaah, laa haula wa laa quwwata illaa billaah",
    translation: "In the name of Allah, I place my trust in Allah. There is no might nor power except with Allah.",
    benefits: "Whoever recites this supplication, it will be said to him: \"You will be guided, sufficed, and protected.\" Satan will then depart from him. Another satan will say: \"How can you harm someone who has been guided, sufficed, and protected?!\"",
    reference: "HR. Abu Dawud and at-Tirmidzi",
    category: "home"
  },
  {
    id: 16,
    title: "Supplication for Protection from Causing or Experiencing Harm Outside the House",
    arabic: "اللَّهُمَّ إِنِّى أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ أَوْ أَزِلَّ أَوْ أُزَلَّ أَوْ أَظْلِمَ أَوْ أُظْلَمَ أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَىَّ",
    transliteration: "allaahumma innii a'uudzu bika an adhilla au udholla, au azilla au azulla, au azhlima au uzhlama, au ajhala au yujhala 'alayya",
    translation: "O Allah, I seek refuge in You lest I should stray or be led astray, slip or be tripped, wrong or be wronged, or act foolishly or have foolishness done to me.",
    benefits: "When a person leaves the house, they will encounter all kinds of things, both good and bad, especially harm caused by themselves. Therefore, it is commanded to seek refuge from oneself and from others.",
    reference: "HR. Abu Dawud, at-Tirmidzi, Ibn Majah and an-Nasa'i",
    category: "protection"
  },
  {
    id: 17,
    title: "Travel Supplication",
    arabic: "الله أَكْبَرُ،الله أَكْبَرُ،الله أَكْبَرُ،سُبْحَانَ الَّذِى سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ اللَّهُمَّ إِنَّا نَسْأَلُكَ فِى سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ اللَّهُمَّ أَنْتَ الصَّاحِبُ فِى السَّفَرِ وَالْخَلِيفَةُ فِى الأَهْلِ اللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَكَآبَةِ الْمَنْظَرِ وَسُوءِ الْمُنْقَلَبِ فِى الْمَالِ وَالأَهْلِ",
    transliteration: "allahu akbar, allahu akbar, allahu akbar. subhaanal ladzi sakh-khara lanaa haadza wa maa kunna lahuu muqriniin wa inna ilaa rabbina lamun qalibuun. allahumma inna nas aluka fii safarina hadzaa al-birra wat taqwa wa minal amali maa tardhaa. allahumma hawwin 'alaina safarana haadza wathwi 'anna bu'dahu. allahumma anta shaahibu fi safar. wal khaliifatu fil ahli. allahumma inni a'uudzubika min wa'tsaa-issafari wa ka-aabatil mandzari wa suuil munqalabi fil maali wal ahli",
    translation: "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. Glory be to Him who has provided this for us, though we could never have had it by our own efforts. Surely to our Lord we are returning. O Allah, we ask You for righteousness and piety in this journey of ours, and for deeds that please You. O Allah, lighten for us the hardship of this journey and quickly bring us to our destination. O Allah, You are our Companion on the journey and the Guardian of our families. O Allah, I seek refuge in You from the hardship of travel, from a bad return, and from seeing something unpleasant concerning our wealth, family, or children.",
    benefits: "This supplication has two parts. The first is praise of Allah and the submission of the servant. The second is a request to Allah for ease in travel and in the affairs of what the servant has left at home.",
    reference: "HR. Muslim",
    category: "protection"
  },
  {
    id: 18,
    title: "Supplication of a Resident for Someone Who is Traveling",
    arabic: "أَسْتَوْدِعُ اللَّهَ دِينَكَ وَأَمَانَتَكَ وَخَوَاتِيمَ عَمَلِكَ",
    transliteration: "astawdi'ullaha diinaka, wa amaanataka, wa khawaatiima a'maalik",
    translation: "I entrust your religion, your trust, and the end of your deeds to Allah.",
    benefits: "Three priorities of a servant that must be maintained everywhere: religion, trust, and deeds, because a person will be resurrected according to their deeds.",
    reference: "HR. Abu Dawud: 2601",
    category: "protection"
  },
  {
    id: 19,
    title: "Supplication for Piety from a Resident to Someone Who is Traveling",
    arabic: "زَوَّدَكَ اللَّهُ التَّقْوَى وَغَفَرَ ذَنْبَكَ  وَيَسَّرَ لَكَ الْخَيْرَ حَيْثُمَا كُنْتَ",
    transliteration: "zawwadakallahut taqwa, wa ghafara dzanbaka, wa yassara lakal khaira haitsumaa kunta",
    translation: "May Allah provide you with piety, forgive your sins, and ease goodness for you wherever you are.",
    benefits: "Piety is the best provision that a servant must prepare for the Hereafter, because there is no salvation except through piety.",
    reference: "HR. at-Tirmidzi",
    category: "protection"
  },
  {
    id: 20,
    title: "Supplication When Wearing New Clothes",
    arabic: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ",
    transliteration: "allahumma lakal hamdu anta kasawtaniihi. as-aluka min khoirihi wa khoiri maa shuni'a lah, wa a'udzu bika min syarrihi wa syarri maa shuni'a lah",
    translation: "O Allah, to You is all praise. You have clothed me with this. I ask You for its goodness and the goodness for which it was made, and I seek refuge in You from its evil and the evil for which it was made.",
    benefits: "By reciting this supplication, one asks that the clothes they have bought may provide goodness and also be a protection against various evils.",
    reference: "HR. Ahmad, Abu Dawud, at-Tirmidzi and Al-Hakim",
    category: "general"
  },
  {
    id: 21,
    title: "Supplication When Wearing Clothes",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِى كَسَانِى هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّى وَلاَ قُوَّةٍ",
    transliteration: "alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin",
    translation: "Praise be to Allah who has clothed me with this garment and provided it for me without any power or strength from me.",
    benefits: "The virtue of reciting this supplication is that past sins will be forgiven, God willing.",
    reference: "HR. all compilers of Sunan books, except Nasa'i",
    category: "general"
  },
  {
    id: 22,
    title: "Supplication When Mounting a Vehicle",
    arabic: "بِسْمِ اللَّهِ، بِسْمِ اللَّهِ، بِسْمِ اللَّهِ، الحَمْدُ للِه، سُبْحَانَ الَّذِى سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، سُبْحَانَكَ إِنِّى قَدْ ظَلَمْتُ نَفْسِى فَاغْفِرْ لِى فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ",
    transliteration: "bismillah, bismillah, bismillah, alhamdulillah, subhaanalladzi sakh-khara lanaa haadzaa wa maa kunnaa lahuu muqriniin. wa innaa ilaa rabbinaa lamun qalibuun. subhaanaka inni qad dzalamtu nafsii, faghfirlii fa-innahuu laa yaghfirudz dzunuuba illaa anta",
    translation: "In the name of Allah, in the name of Allah, in the name of Allah. All praise is to Allah. Glory be to Him who has subjected this to us, and we could not have done so by ourselves. And indeed, to our Lord we will return. Glory be to You, indeed I have wronged myself, so forgive me, for none can forgive sins except You.",
    benefits: "By reciting the supplication for mounting a vehicle, our journey will always be under the protection of Allah. In addition, we will also receive rewards, help, and a calmer heart.",
    reference: "HR. Abu Dawud and at-Tirmidzi",
    category: "protection"
  },
  {
    id: 23,
    title: "Supplication When it Rains",
    arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    transliteration: "allahumma shayyiban naafi'aa",
    translation: "O Allah, make it a beneficial rain.",
    benefits: "It is encouraged to pray when it rains so that goodness and blessings increase, as well as its benefits.",
    reference: "HR. al-Bukhari No. 1032",
    category: "general"
  },
  {
    id: 24,
    title: "Supplication During Heavy Rain",
    arabic: "اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا ، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ وَبُطُونِ الأَوْدِيَةِ وَمَنَابِتِ الشَّجَرِ",
    transliteration: "allahumma haawalaina wa laa 'alaina. allahumma 'alal aakami wal jibaali, wazh zhiroobi, wa buthunil awdiyati, wa manaabitisy syajari",
    translation: "O Allah, (let the rain fall) around us, not on us. O Allah, (let it fall) on the hills, mountains, small mountains, valleys, and places where trees grow.",
    benefits: "The supplication above is recited when the rain gets heavier or there is a concern that the rain will cause harm.",
    reference: "HR. al-Bukhari No. 1014",
    category: "general"
  },
  {
    id: 25,
    title: "Supplication After it Rains",
    arabic: "مُطِرْنا بفَضْلِ اللهِ ورَحْمَتِهِ",
    transliteration: "muthirna bi fadhlillahi wa rohmatih",
    translation: "We have been given rain by the bounty and mercy of Allah.",
    benefits: "By reciting this supplication, one believes that rain falls by the will of Allah (Allah's virtue), not by the stars, so they do not become disbelievers in Allah.",
    reference: "HR. al-Bukhari No. 846 and Muslim No. 71",
    category: "general"
  },
  {
    id: 26,
    title: "Supplication During Strong Wind",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَأَعُوْذُ بِكَ مِنْ شَرِّهَا",
    transliteration: "allaahumma innii as-aluka khoirohaa wa a'uudzubika min syarrihaa",
    translation: "O Allah, I ask You for the good of this wind, and I seek refuge in You from its evil.",
    benefits: "Among the signs of Allah's power is a strong wind that can bring blessings and punishment, namely good and bad. Therefore, a servant should continue to ask for good and seek refuge from all harm.",
    reference: "HR. Abu Dawud and Ibnu Majah",
    category: "general"
  },
  {
    id: 27,
    title: "The Best Supplication for Seeking Forgiveness (Sayyid al-Istighfar)",
    arabic: "اَللَّهُمَّ أَنْتَ رَبِّيْ ، لَا إِلٰـهَ إِلاَّ أَنْتَ خَلَقْتَنِيْ وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوْءُ لَكَ بِنِعْمتِكَ عَلَيَّ ، وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ",
    transliteration: "allahumma anta rabbii laa ilaaha illaa anta khalaqtanii wa anna 'abduka wa anaa 'alaa 'ahdika wa wa'dika mastatha'tu a'uudzu bika min syarri maa shana'tu abuu u laka bini' matika 'alayya wa abuu-u bidzanbii faghfir lii fa innahu laa yaghfirudz dzunuuba illa anta",
    translation: "O Allah, You are my Lord. There is no deity worthy of worship except You. You created me, and I am Your servant. I abide to Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessings upon me, and I acknowledge my sin. So forgive me, for none can forgive sins except You.",
    benefits: "Whoever recites it with certainty in the evening, and then he dies, he will enter Paradise, and likewise if (recited) in the morning.",
    reference: "HR. al-Bukhari No. 6306, 6323, Ahmad IV/122-125, an-Nasa'i VIII/279-280",
    category: "general"
  },
  {
    id: 28,
    title: "Supplication for Ease in All Matters",
    arabic: "اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً وَأَنْتَ تَجْعَلُ الحَزْنَ إِذَا شِئْتَ سَهْلاً",
    transliteration: "allahumma laa sahla illa maa ja'altahu sahlaa, wa anta taj'alul hazna idza syi'ta sahlaa",
    translation: "O Allah, there is no ease except in that which You make easy, and You make the difficult easy if You wish.",
    benefits: "Ease comes only from Allah. Even something difficult can become easy if Allah wills it.",
    reference: "HR. Ibn Hibban",
    category: "general"
  },
  {
    id: 29,
    title: "Supplication When Afflicted by Calamity",
    arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ اللَّهُمَّ أْجُرْنِى فِى مُصِيبَتِى وَأَخْلِفْ لِى خَيْرًا مِنْهَا",
    transliteration: "inna lillahi wa inna ilaihi rooj'un. allahumma'jurnii fii mushibatii wa akhlif lii khoiron minhaa",
    translation: "Indeed we belong to Allah, and indeed to Him we will return. O Allah, reward me for my affliction and replace it with something better.",
    benefits: "A servant should recite the supplication above when afflicted by calamity with certainty and hope. God willing, with this, they will receive a better replacement.",
    reference: "HR. Muslim",
    category: "general"
  },
  {
    id: 30,
    title: "Supplication When in Debt",
    arabic: "اللَّهُمَّ اكْفِنِى بِحَلاَلِكَ عَنْ حَرَامِكَ وَأَغْنِنِى بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    transliteration: "allahumak-finii bi halaalika 'an haroomik, wa agh-niniy bi fadhlika 'amman siwaak",
    translation: "O Allah, suffice me with what is lawful and keep me away from what is unlawful, and enrich me with Your bounty so I do not depend on anyone besides You.",
    benefits: "Lawful provision, even if it is little, is better than abundant unlawful wealth.",
    reference: "HR. at-Tirmidzi No. 2563",
    category: "general"
  },
  {
    id: 31,
    title: "Supplication for Protection from Laziness, Sadness, and Debt",
    arabic: "اَللّٰهُمَّ إِنِّى أَعُوْذُبِكَ مِنَ الْهَمِّ وَالْحَزْنِ وَأَعُوْذُبِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوْذُبِكَ مِنَ الْجُبْنِ وَالْبُخْلِ وَأَعُوْذُبِكَ مِنْ غَلَبَتِ الدَّيْنِ وَقَهْرِ الرجال",
    transliteration: "allahumma innii a'uudzu bika minal hammi wal hazan. wa a'udzu bika minal 'ajzi wal kasal. wa a'udzu bika minal jubni wal bukhl. wa a'uudzu bika min ghalabatid daini wa qahrir rijaal",
    translation: "O Allah, I seek refuge in You from anxiety and grief, and I seek refuge in You from incapacity and laziness, and I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being overpowered by debt and from being overcome by men.",
    benefits: "Abu Umamah then narrated: After I practiced this supplication, Allah truly removed my anxiety and gave me the ability to repay my debt.",
    reference: "HR. Abu Dawud No. 1555",
    category: "general"
  },
  {
    id: 32,
    title: "Supplication After Sneezing",
    arabic: "الحَمْدُ للهِ",
    transliteration: "alhamdulillah",
    translation: "All praise is to Allah.",
    benefits: "Indeed, Allah loves sneezing because it moves a person to worship. It is encouraged to respond to the praise of Allah by someone who praises Allah, and vice versa.",
    reference: "HR. al-Bukhari",
    category: "general"
  },
  {
    id: 33,
    title: "Supplication Upon Hearing Someone Sneeze",
    arabic: "يَرْحَمُكَ اللهُ",
    transliteration: "yarhamukallah",
    translation: "May Allah have mercy on you.",
    benefits: "Indeed, Allah loves sneezing because it moves a person to worship. It is encouraged to respond to the praise of Allah by someone who praises Allah, and vice versa.",
    reference: "HR. al-Bukhari",
    category: "general"
  },
  {
    id: 34,
    title: "Response to Someone Who Says 'Yarhamukallah' After You Sneeze",
    arabic: "يَهْدِيكُمُ اللهُ وَيُصْلِحُ بَالَكُمْ",
    transliteration: "yahdikumullah wa yushlihu baalakum",
    translation: "May Allah guide you and improve your condition.",
    benefits: "Indeed, Allah loves sneezing because it moves a person to worship. It is encouraged to respond to the praise of Allah by someone who praises Allah, and vice versa.",
    reference: "HR. al-Bukhari",
    category: "general"
  },
  {
    id: 35,
    title: "Supplication for Good Character",
    arabic: "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    transliteration: "allahumma kamaa hassanta kholqii fahassin khuluqii",
    translation: "O Allah, just as You have made my external form good, make my character good as well.",
    benefits: "A charming appearance is not enough provision for a Muslim, but it must be accompanied by noble character. Therefore, a Muslim should constantly ask for their character to be improved and beautified.",
    reference: "HR. Ahmad, authenticated by al-Albani in al-Irwa', 1/115",
    category: "general"
  },
  {
    id: 36,
    title: "Prayer for Protection from Satan",
    arabic: "رَبِّ أَعُوْذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِيْنِ وَأَعُوْذُ بِكَ رَبِّ أَنْ يَحْضُرُوْنِ",
    transliteration: "rabbi a'uudzu bika min hamazaatisy-syayaathiin wa a'uudzu bika rabbi ay yahdhuruun",
    translation: "My Lord, I seek refuge in You from the whispers of Satan, and I seek refuge in You, my Lord, from their presence around me.",
    benefits: "Indeed, Allah commands the Prophet Muhammad and all his followers to seek refuge from the whispers of Satan in all activities, especially when approaching death. Satan whispers evil into the hearts of humans, encouraging wrongdoing.",
    reference: "QS. Al-Mu'minun: 97-98",
    category: "general"
  },
  {
    id: 37,
    title: "Prayer After the Adhan",
    arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
    transliteration: "allahumma rabba haadzihid da'watit taammah, wasshalaatil qaaaimah, aati muhammadanil wasiilata wal fadhiiilata, wab'atshu maqaaman mahmuuda alladzii wa'adtah",
    translation: "O Allah, Lord of this perfect call and the established prayer, grant Muhammad the wasilah (a high status in Paradise) and the excellence (above all creation), and raise him to the praiseworthy station that You have promised him.",
    benefits: "This prayer is recommended by the Prophet Muhammad (peace be upon him) for those who hear the call to prayer. It has many benefits, including receiving intercession from the Prophet on the Day of Judgment, attaining the wasilah and honor in Paradise for the Prophet, and receiving great and commendable reward from Allah. It is also a way to show respect and admiration for Allah and His Messenger, expressing love and longing for the Prophet Muhammad, the role model for Muslims.",
    reference: "Narrated by Abu Dawud (529), at-Tirmidhi (211), an-Nasa'i (2:26), Ibn Majah (722)",
    category: "prayer"
  },
  {
    id: 38,
    title: "Prayer for Forgiveness for Parents",
    arabic: "رَبَّنَا ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ",
    transliteration: "rabbanagfir lii wa liwaalidayya wa lil-mu'miniina yauma yaquumul-hiisaab",
    translation: "Our Lord, forgive me and my parents and all the believers on the Day the account is established.",
    benefits: "This is a prayer of Prophet Ibrahim (peace be upon him), teaching us to honor and love our parents, remember the Day of Judgment, and care for fellow believers. By making this prayer, we hope that Allah will forgive our sins and make us among the faithful.",
    reference: "QS. Ibrahim: 41",
    category: "family"
  },
  {
    id: 39,
    title: "Istighfar",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    transliteration: "astagh-firullah",
    translation: "I seek forgiveness from Allah.",
    notes: "Read 3x",
    benefits: "When the Messenger of Allah, peace and blessings be upon him, finished his prayer, he would seek forgiveness three times and recite the dhikr above. Al-Auza'i stated that the recitation of istighfar is 'Astaghfirullah, Astaghfirullah.'",
    reference: "HR. Muslim No. 591",
    category: "general"
  },
  {
    id: 40,
    title: "Allah, The Giver of Peace",
    arabic: "اَللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَاْلإِكْرَامِ",
    transliteration: "allahumma antas salaam wa minkas salaam tabaarokta ya dzal jalaali wal ikrom",
    translation: "O Allah, You are Peace, and from You is peace. Blessed are You, O Possessor of majesty and honor.",
    notes: "Read 1x",
    benefits: "When the Messenger of Allah, peace and blessings be upon him, finished his prayer, he would seek forgiveness three times and recite the dhikr above. Al-Auza'i stated that the recitation of istighfar is 'Astaghfirullah, Astaghfirullah.'",
    reference: "HR. Muslim No. 591",
    category: "general"
  },
  {
    id: 41,
    title: "Allah, The Preventer and The Giver of All Things",
    arabic: "لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ، اَللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    transliteration: "laa ilaha illallah wahdahu laa syarika lah, lahul mulku wa lahul hamdu wa huwa 'ala kulli syai-in qodiir. allahumma laa maani'a lima a'thoita wa laa mu'thiya limaa mana'ta wa laa yanfau dzal jaddi minkal jaddu",
    translation: "There is no deity worthy of worship except Allah alone, He has no partner. To Him belongs dominion and praise, and He is over all things competent. O Allah, there is no preventer of what You give, and no giver of what You withhold, and wealth and honor do not benefit their possessor (except faith and righteous deeds that save from punishment). Only from You is wealth and honor.",
    notes: "Read 1x",
    benefits: null,
    reference: "HR. Bukhari No. 844 and Muslim No. 593",
    category: "general"
  },
  {
    id: 42,
    title: "Allah, The Possessor of All and The Only One Worthy of Worship",
    arabic: "لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ. لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللهِ، لاَ إِلَـهَ إِلاَّ اللهُ، وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لاَ إِلَـهَ إِلاَّ اللهُ مُخْلِصِيْنَ لَهُ الدِّيْنَ وَلَوْ كَرِهَ الْكَافِرُوْنَ",
    transliteration: "laa ilaha illallah wahdahu laa syarika lah. lahul mulku wa lahul hamdu wa huwa 'ala kulli syai-in qodiir. laa hawla wa laa quwwata illa billah. laa ilaha illallah wa laa na'budu illa iyyah. lahun ni'mah wa lahul fadhl wa lahuts tsanaaul hasan. laa ilaha illallah mukhlishiina lahud diin wa law karihal kaafiruun",
    translation: "There is no deity worthy of worship except Allah alone, He has no partner. To Him belongs dominion and praise, and He is over all things competent. There is no power and no strength except by Allah. There is no deity worthy of worship except Allah, and we do not worship except Him. To Him belongs all favor, grace, and good praise. There is no deity worthy of worship except Allah, making our religion sincerely for Him, even if the disbelievers dislike it.",
    notes: "Read 1x",
    benefits: "'Abdullah bin Zubair said, \"The Prophet, peace and blessings be upon him, used to recite the tahlil (laa ilaha illallah) at the end of the prayer.\"",
    reference: "HR. Muslim No. 594",
    category: "general"
  },
  {
    id: 43,
    title: "Tasbih",
    arabic: "سُبْحَانَ اللهِ",
    transliteration: "subhanallah",
    translation: "Glory be to Allah",
    notes: "Read 33x",
    benefits: null,
    reference: null,
    category: "general"
  },
  {
    id: 44,
    title: "Tahmid",
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "alhamdulillah",
    translation: "All praise is for Allah",
    notes: "Read 33x",
    benefits: null,
    reference: null,
    category: "general"
  },
  {
    id: 45,
    title: "Takbir",
    arabic: "اللهُ أَكْبَرُ",
    transliteration: "allahu akbar",
    translation: "Allah is the Greatest",
    notes: "Read 33x",
    benefits: null,
    reference: null,
    category: "general"
  },
  {
    id: 46,
    title: "There is No Partner for Allah, and To Him Belongs All Things",
    arabic: "لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ",
    transliteration: "laa ilaha illallah wahda, laa syarika lah. lahul mulku wa lahul hamdu wa huwa 'ala kulli syai-in qodiir",
    translation: "There is no deity worthy of worship except Allah alone, He has no partner. To Him belongs dominion and praise, and He is over all things competent.",
    notes: "Read 1x",
    benefits: "Whoever recites the dhikr above, his sins will be forgiven, even if they are as numerous as the foam on the ocean. Imam Nawawi, may Allah have mercy on him, said that the text of the hadith indicates that 'Subhanallah', 'Alhamdulillah', and 'Allahu akbar' are each recited 33 times separately.",
    reference: "Syarh Shahih Muslim, 5: 84",
    category: "general"
  },
  {
    id: 47,
    title: "Ayat al-Kursi",
    arabic: "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
    transliteration: "Allāhu lā ilāha illā huw, al-ḥayyul-qayyụm, lā ta`khużuhụ sinatuw wa lā na`ụm, lahụ mā fis-samāwāti wa mā fil-arḍ, man żallażī yasyfa'u 'indahū illā bi`iżnih, ya'lamu mā baina aidīhim wa mā khalfahum, wa lā yuḥīṭụna bisyai`im min 'ilmihī illā bimā syā`, wasi'a kursiyyuhus-samāwāti wal-arḍ, wa lā ya`ụduhụ ḥifẓuhumā, wa huwal-'aliyyul-'aẓīm",
    translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    notes: "Read 1x",
    benefits: "Whoever recites Ayat al-Kursi after finishing the prayer, nothing will prevent him from entering Paradise except death.",
    reference: "HR. an-Nasai in Al-Kubro 9: 44. This hadith is declared sahih by Ibn Hibban, as mentioned by Ibn Hajar in Bulughul Maram",
    category: "general"
  },
  {
    id: 48,
    title: "Al-Ikhlas",
    arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ (1) ٱللَّهُ ٱلصَّمَدُ (2) لَمْ يَلِدْ وَلَمْ يُولَدْ (3) وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ (4)",
    transliteration: "qul huwallāhu aḥad (1) allāhuṣ-ṣamad (2) lam yalid wa lam yụlad (3) wa lam yakul lahụ kufuwan aḥad (4)",
    translation: "Say, \"He is Allah , [who is] One, (1) Allah , the Eternal Refuge. (2) He neither begets nor is born, (3) Nor is there to Him any equivalent.\" (4)",
    notes: "Read 3x",
    benefits: "The Messenger of Allah, peace and blessings be upon him, said: Recite Qul huwallahu ahad, and Al-Mu'awwidhatayn (Al-Falaq and An-Nas) in the evening and morning three times, and it will suffice you (protect you) from everything.",
    reference: "HR. Abu Dawud No. 1523 and an-Nasa'i No. 1337. Al Hafizh Abu Thohir said that the chain of this hadith is hasan",
    category: "general"
  },
  {
    id: 49,
    title: "Al-Falaq",
    arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ (1) مِن شَرِّ مَا خَلَقَ (2) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ (4) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)",
    transliteration: "qul a'ụżu birabbil-falaq (1) min syarri mā khalaq (2) wa min syarri gāsiqin iżā waqab (3) wa min syarrin-naffāṡāti fil-'uqad (4) wa min syarri ḥāsidin iżā ḥasad (5)",
    translation: "Say, \"I seek refuge in the Lord of daybreak (1) From the evil of that which He created (2) And from the evil of darkness when it settles (3) And from the evil of the blowers in knots (4) And from the evil of an envier when he envies.\" (5)",
    notes: "Read 3x",
    benefits: "The Messenger of Allah, peace and blessings be upon him, said: Recite Qul huwallahu ahad, and Al-Mu'awwidhatayn (Al-Falaq and An-Nas) in the evening and morning three times, and it will suffice you (protect you) from everything.",
    reference: "HR. Abu Dawud No. 1523 and an-Nasa'i No. 1337. Al Hafizh Abu Thohir said that the chain of this hadith is hasan",
    category: "general"
  },
  {
    id: 50,
    title: "An-Naas",
    arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ (1) مَلِكِ ٱلنَّاسِ (2) إِلَٰهِ ٱلنَّاسِ (3) مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ (4) ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ (5) مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ (6)",
    transliteration: "qul a'ụżu birabbin-nās (1) malikin-nās (2) ilāhin-nās (3) min syarril-waswāsil-khannās (4) allażī yuwaswisu fī ṣudụrin-nās (5) minal-jinnati wan-nās (6)",
    translation: "Say, \"I seek refuge in the Lord of mankind, (1) The King of mankind. (2) The God of mankind, (3) From the evil of the whisperer who withdraws, (4) Who whispers in the breasts of mankind, (5) Of the jinn and mankind.\" (6)",
    notes: "Read 3x",
    benefits: "The Messenger of Allah, peace and blessings be upon him, said: Recite Qul huwallahu ahad, and Al-Mu'awwidhatayn (Al-Falaq and An-Nas) in the evening and morning three times, and it will suffice you (protect you) from everything.",
    reference: "HR. Abu Dawud No. 1523 and an-Nasa'i No. 1337. Al Hafizh Abu Thohir said that the chain of this hadith is hasan",
    category: "general"
  },
  {
    id: 51,
    title: "Supplication for Beneficial Knowledge, Good Provision, and Accepted Deeds",
    arabic: "اللَّهُمَّ إِنِّى أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",
    transliteration: "allahumma innii as-aluka 'ilman naafi'a, wa rizqan thayyiba, wa 'amalan mutaqabbala",
    translation: "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.",
    notes: "Read 1x after the salam of Fajr prayer",
    benefits: "Beneficial knowledge is a provision that makes life easier, obtaining good provision is a person's goal in working, and accepted deeds are the hope of every person who performs good deeds. Therefore, a servant should always ask for these 3 things every morning before starting their various activities.",
    reference: "HR. Ibn Majah No. 925 and Ahmad 6: 305, 322. Al-Hafizh Abu Thohir said that this hadith is sahih",
    category: "general"
  },
  {
    id: 52,
    title: "Entering the Evening in the Kingdom of Allah and Seeking His Protection",
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration: "amsaynaa wa amsal mulku lillah walhamdulillah, laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa 'ala kulli syai-in qodir. robbi as-aluka khoiro maa fii hadzihil lailah wa khoiro maa ba'dahaa, wa a'udzu bika min syarri maa fii hadzihil lailah wa syarri maa ba'dahaa. robbi a'udzu bika minal kasali wa suu-il kibar. robbi a'udzu bika min 'adzabin fin naari wa 'adzabin fil qobri",
    translation: "We have entered the evening and the dominion belongs to Allah, and all praise is for Allah. There is no deity worthy of worship except Allah alone, He has no partner. To Him belongs the dominion and to Him is praise, and He is over all things competent. My Lord, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and the evil of what follows it. My Lord, I seek refuge in You from laziness and the evil of old age. My Lord, I seek refuge in You from the punishment of the Fire and the punishment of the grave.",
    notes: "Read 1x",
    benefits: "Seeking protection from evil is prioritized, the principle that shows the importance of this is: \"Preventing harm is more important and prioritized than bringing about good.\"",
    reference: "HR. Muslim No. 2723 (75), Abu Dawud No. 5071, and at-Tirmidzi 3390, sahih from Abdullah Ibn Mas'ud",
    category: "evening"
  },
  {
    id: 53,
    title: "Entering the Evening by Seeking Allah's Mercy",
    arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا،وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيْرُ",
    transliteration: "allahumma bika amsaynaa wa bika ash-bahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir",
    translation: "O Allah, by Your grace and help we have entered the evening, and by Your grace and help we enter the morning. By Your grace and help we live and by Your will we die. And to You is the final return (of all creatures).",
    notes: "Read 1x",
    benefits: "Everything we do from morning to evening, from the beginning of our lives until we die, is all under Allah's control and to Him we return.",
    reference: "HR. al-Bukhari in al-Abadul Mufrad No. 1199, this wording is the wording of al-Bukhari at-Tirmidzi No. 3391, Abu Dawud No. 5068, Ahmad 11/354, Ibn Majah No. 3868",
    category: "evening"
  },
  {
    id: 54,
    title: "The Master of Seeking Forgiveness",
    arabic: "اَللَّهُمَّ أَنْتَ رَبِّيْ ، لَا إِلٰـهَ إِلاَّ أَنْتَ خَلَقْتَنِيْ وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوْءُ لَكَ بِنِعْمتِكَ عَلَيَّ ، وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ",
    transliteration: "allahumma anta rabbii laa ilaaha illaa anta khalaqtanii wa anna 'abduka wa anaa 'alaa 'ahdika wa wa'dika mastatha'tu a'uudzu bika min syarri maa shana'tu abuu u laka bini' matika 'alayya wa abuu-u bidzanbii faghfir lii fa innahu laa yaghfirudz dzunuuba illa anta",
    translation: "O Allah, You are my Lord, there is no deity worthy of worship except You, You created me and I am Your servant. I will be true to my covenant and promise to You as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me and I acknowledge my sin, therefore, forgive me. Indeed, there is no one who can forgive sins except You.",
    notes: "Read 1x",
    benefits: "Whoever recites it with certainty in the evening, and then he dies, he will enter Paradise, and likewise if (recited) in the morning.",
    reference: "HR. al-Bukhari No. 6306, 6323, Ahmad IV/122-125, an-Nasa'i VIII/279-280",
    category: "general"
  },
  {
    id: 55,
    title: "Prayer for Health and Protection",
    arabic: "اَللَّهُمَّ عَافِنِيْ فِيْ بَدَنِيْ ، اَللَّهُمَّ عَافِنِيْ فِيْ سَمْعِيْ ، اَللَّهُمَّ عَافِنِيْ فِيْ بَصَرِيْ ، لَا إِلَـهَ إِلَّا أَنْتَ ، اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْكُفْرِوَالْفَقْرِ ، وَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ ، لَا إِلَـهَ إِلَّا أَنْتَ",
    transliteration: "allaahumma 'aafinii fii badanii, allaahumma 'aafinii fii sam'ii, allaahumma 'aafinii fii bashorii, laa ilaaha illaa anta. allaahumma inni a'uudzu bika minal kufri wal faqr, allaahumma inni a'uudzu bika min 'adzaabil qobr, laa ilaaha illaa anta",
    translation: "O Allah, protect my body (from illness and from what I do not want). O Allah, protect my hearing (from illness and disobedience or from what I do not want). O Allah, protect my sight, there is no deity worthy of worship except You. O Allah, indeed I seek refuge in You from disbelief and poverty. I seek refuge in You from the punishment of the grave, there is no deity worthy of worship except You.",
    notes: "Read 1x",
    benefits: "By asking Allah to grant us well-being in our bodies, we ask to be healed from all physical and spiritual illnesses, so that we have a healthy body and a pure heart, and therefore use this healthy body in a way that pleases Allah.",
    reference: "HR. al-Bukhari in Shahiib al-Adabil Mufrad No. 701, Abu Dawud No. 5090, Ahmad V/42, hasan",
    category: "general"
  },
  {
    id: 56,
    title: "Prayer for Safety in This World and the Hereafter",
    arabic: "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ",
    transliteration: "allahumma innii as-alukal 'afwa wal 'aafiyah fid dunyaa wal aakhiroh. allahumma innii as-alukal 'afwa wal 'aafiyah fii diinii wa dun-yaaya wa ahlii wa maalii. allahumas-tur 'awrootii wa aamin row'aatii. allahummahfazh-nii mim bayni yadayya wa min kholfii wa 'an yamiinii wa 'an syimaalii wa min fawqii wa a'udzu bi 'azhomatik an ugh-taala min tahtii",
    translation: "O Allah, indeed I ask You for well-being and safety in this world and the Hereafter. O Allah, indeed I ask You for well-being and safety in my religion, my world, my family and my wealth. O Allah, cover my flaws (faults and things that are not appropriate for others to see) and calm me from fear. O Allah, protect me from the front, behind, right, left and above me. I seek refuge in Your greatness, so that I am not snatched from below me (by snakes or swallowed by the earth, etc., which would cause me to fall).",
    notes: "Read 1x",
    benefits: "The Messenger of Allah, peace and blessings be upon him, never left this supplication in the morning and evening. It contains protection and safety for religion, the world, family, and wealth from various kinds of disturbances that come from all directions.",
    reference: "HR. al-Bukhari in al-Abadul Mufrad No. 1200, Abu Dawud No. 5074, an-Nasa'i VII/282, Ibn Majah No. 3871, al-Hakim 1/517-518, and others from Ibn Umar radhiyallahu 'anhumaa",
    category: "general"
  },
  {
    id: 57,
    title: "Prayer for Seeking Protection from the Whispers of Satan",
    arabic: "اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
    transliteration: "allahumma 'aalimal ghoybi wasy-syahaadah faathiros samaawaati wal ardh. robba kulli syai-in wa maliikah. asyhadu alla ilaha illa anta. a'udzu bika min syarri nafsii wa min syarrisy-syaythooni wa syirkihi, wa an aqtarifa 'alaa nafsii suu-an aw ajurrohu ilaa muslim",
    translation: "O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord of all things and their Sovereign. I bear witness that there is no deity worthy of worship except You. I seek refuge in You from the evil of myself, Satan and his soldiers (temptations to commit shirk against Allah), and I (seek refuge in You) from committing evil against myself or dragging it to a Muslim.",
    notes: "Read 1x",
    benefits: "The Messenger of Allah, peace and blessings be upon him, said to Abu Bakr as-Siddiq, may Allah be pleased with him, \"Say it morning and evening and when you want to sleep.\"",
    reference: "HR. al-Bukhari in al-Abadul Mufrad No. 1202, at-Tirmidzi No. 3392 and Abu Dawud No. 5067",
    category: "general"
  },
  {
    id: 58,
    title: "Remembrance to Be Protected from All Dangers",
    arabic: "بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "bismillahilladzi laa yadhurru ma'asmihi syai-un fil ardhi wa laa fis samaa' wa huwas samii'ul 'aliim",
    translation: "In the name of Allah, with whose name nothing in the earth or the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
    notes: "Read 3x",
    benefits: "Whoever recites it three times in the morning and evening, nothing will harm him.",
    reference: "HR. at-Tirmidzi No. 3388, Abu Dawud No. 5088, Ibn Majah No. 3869, al-Hakim 1/514, and Ahmad No. 446 and 474",
    category: "protection"
  },
  {
    id: 59,
    title: "Declaration of Contentment with Allah, Islam, and the Prophet Muhammad (Peace Be Upon Him)",
    arabic: "رَضِيْتُ بِاللهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    transliteration: "rodhiitu billaahi robbaa wa bil-islaami diinaa, wa bi-muhammadin shallallaahu 'alaihi wa sallama nabiyyaa",
    translation: "I am pleased with Allah as my Lord, Islam as my religion, and Muhammad, peace and blessings be upon him, as my Prophet.",
    notes: "Read 3x",
    benefits: "Whoever recites it three times in the morning and evening, Allah will grant His pleasure to him on the Day of Resurrection.",
    reference: "HR. Ahmad IV/337, Abu Dawud No. 5072, at-Tirmidzi No. 3389, Ibn Majah No. 3870, an-Nasa'i in 'Amalul Yaum wal Lailah No. 4 and Ibnus Sunni No. 68",
    category: "general"
  },
  {
    id: 60,
    title: " Asking for Guidance from Allah",
    arabic: "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ أَبَدًا",
    transliteration: "yaa hayyu yaa qoyyum, bi-rohmatika as-taghiits, wa ash-lih lii sya'nii kullahu wa laa takilnii ilaa nafsii thorfata 'ainin abadan",
    translation: "O Ever-Living, O Self-Sustaining, by Your mercy I seek help, rectify all my affairs and do not leave me to myself even for the blink of an eye.",
    notes: "Read 1x",
    benefits: "The meaning of this supplication is that humans are in dire need of Allah and pray that Allah does not abandon them even for a moment.",
    reference: "HR. an-Nasa'i in 'Amalul Yaum wal Lailah No. 575, and al-Hakim 1/545, see Shahiih at-Targhiib wat Tarhiib 1/417 No. 661, Ash-shahiihah No. 227, hasan",
    category: "general"
  },
  {
    id: 61,
    title: "Entering the Evening on the Natural Disposition of Islam",
    arabic: "أَمْسَيْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ، وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ، حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
    transliteration: "amsaynaa 'ala fithrotil islaam wa 'alaa kalimatil ikhlaash, wa 'alaa diini nabiyyinaa Muhammadin shallallahu 'alaihi wa sallam, wa 'alaa millati abiina Ibraahiima haniifam muslimaaw wa maa kaana minal musyrikin",
    translation: "In the evening we are upon the fitrah of Islam, the word of sincerity (the testimony of faith), the religion of our Prophet Muhammad, peace and blessings be upon him, and the religion of our father Abraham, who stood upon the straight path, a Muslim, and was not among the polytheists.",
    notes: "Read 1x",
    benefits: "'Fitratil Islam' means upon the Sunnah, 'kalimatil ikhlas' means the testimony of faith, and 'hanifan' means a heart inclined towards the straight path and goodness.",
    reference: "HR. Ahmad III/406, 407, ad-Darimi II/292 and Ibnus Sunni in Amalul Yaum wal Lailah No. 34, Misykaatul Mashaabiih No. 2415, Shahiihal-Jaami'ish Shaghiir No. 4674, sahih",
    category: "evening"
  },
  {
    id: 62,
    title: "Remembrance of the Oneness of Allah",
    arabic: "لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ",
    transliteration: "laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa 'ala kulli syai-in qodiir",
    translation: "There is no deity worthy of worship except Allah alone, He has no partner. To Him belongs the dominion and all praise. He is over all things competent.",
    notes: "Read 1x or 10x in the morning, Read 100x daily",
    benefits: "Whoever says this dhikr 100 times a day, it is like freeing 10 slaves, 100 good deeds are recorded for him, 100 mistakes are erased for him, he will be protected from the disturbances of Satan from morning until evening, and no one is better than what he does except someone who practices more than that.",
    reference: "HR al-Bukhari No. 3293 and 6403, Muslim IV/2071 No. 2691 (28), at-Tirmidzi No. 3468, Ibn Majah No. 3798",
    category: "general"
  },
  {
    id: 63,
    title: "Reciting Praise to Allah",
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ عَدَدَ خَلْقَهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
    transliteration: "subhanallahi wa bihamdihi 'adada khalqihi wa ridha nafsihi wa zinata 'arsyihi wa midada kalimatihi",
    translation: "Glory be to Allah, as many as His creations, Glory be to Allah as much as His pleasure, Glory be to Allah as much as the weight of His Throne, and as much as the ink of His written words.",
    notes: "Read 3x",
    benefits: "The Prophet, peace and blessings be upon him, told Juwairiyah that the dhikr above has surpassed the dhikr recited by Juwairiyah from after Fajr until Dhuha time.",
    reference: "HR. Muslim No. 2726. Syarah Muslim XVII/44. From Juwairiyah bint al-Harith radhiyallahu 'anha",
    category: "general"
  },
  {
    id: 64,
    title: "Daily Praise (Tasbih and Alhamdulillah)",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "subhaanallahi wa bihamdihi",
    translation: "Glory be to Allah, and praise be to Him.",
    notes: "Read 100x",
    benefits: "Whoever says \"Subhanallah wa bihamdihi\" 100 times in the morning and evening, then nothing will come on the Day of Judgment better than what he has done except one who says the same or more than that.",
    reference: "HR. Muslim No. 2691 and No. 2692, from Abu Hurairah radhiyallahu 'anhu Syarah Muslim XVII/17-18, Shahiih at-Targhiib wat Tarhiib 1/413 No. 653",
    category: "general"
  },
  {
    id: 65,
    title: "Seeking Forgiveness 100 Times a Day",
    arabic: "أَسْتَغْفِرُ الله وَأَتُوْبُ إِلَيْهِ",
    transliteration: "astagh-firullah wa atuubu ilaih",
    translation: "I seek forgiveness from Allah and repent to Him.",
    notes: "Read 100x daily",
    benefits: "Ibn 'Umar said: The Messenger of Allah, peace and blessings be upon him, said: 'O people, repent to Allah, for indeed I repent to Him one hundred times a day.'",
    reference: "HR. al-Bukhari/Fat-hul Baari XI/101 and Muslim No. 2702",
    category: "general"
  },
  {
    id: 66,
    title: "Prayer for Protection from the Evil of Allah's Creation",
    arabic: "أَعُوْذُ بِكَلِمَاتِ اللهِ التَّآمَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "'audzu bi kalimaatillahittaamaati min syarri ma khalaq",
    translation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    notes: "Read 3x",
    benefits: "Whoever recites it three times in the evening, they will not be afflicted with fever that night.",
    reference: "HR. Ahmad 11/290, an-Nasa'i in 'Amalul Yaum wal Lailah No. 596, Shahiih at-Targhiib wat Tarhiib 1/412 No. 652, Shahiih al-Jaami 'ish Shaghiir No. 6427",
    category: "protection"
  },
  {
    id: 67,
    title: "Dua Seeking Good In This World And In The Hereafter",
    arabic: "رَبَّنَا آَتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآَخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "rabbana atina fi'd-dunya hasanatan wa fi'l-akhirati hasanatan wa qina 'adhaban-nar",
    translation: "Our Lord! Give us good in this world that and give us good in the Hereafter, and save us from the torment of the hell fire.",
    benefits: "This dua is the dua most often said by the Prophet shallallahu 'alaihi wa sallam, as told by sahaba Anas bin Malik radhiallahu anhu.",
    reference: "QS. Al-Baqarah: 201, al-Bukhari: 6389, HR. Muslim: 2690",
    category: "general"
  },
  {
    id: 68,
    title: "Dua To Make Heart Firm Upon Deen #1",
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِى عَلَى دِينِكَ",
    transliteration: "ya muqallibal-qulubi thabbit qalbi 'ala deenika",
    translation: "O Changer of the hearts, make my heart firm upon Your religion.",
    benefits: "A person's heart is between the fingers of Allah ta'ala, and He turns it back and forth according to his will. So, it is appropriate for someone to always ask that Allah will set their heart on goodness, and always be istiqamah in the truth.",
    reference: "HR. at-Tirmidzi, No. 3522 and Ahmad, 6: 315",
    category: "general"
  },
  {
    id: 69,
    title: "Dua To Make Heart Firm Upon Deen #2",
    arabic: "اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ",
    transliteration: "allahumma musarrif al-qulubi sarrif qulubana 'ala ta'atik",
    translation: "O Allah! Controller of the hearts, direct our hearts to Your obedience.",
    benefits: "A person's heart is between the fingers of Allah ta'ala, and He turns it back and forth according to his will. So, it is appropriate for someone to always ask that Allah will set their heart on goodness, and always be istiqamah in the truth.",
    reference: "HR. Muslim No. 2654",
    category: "general"
  },
  {
    id: 70,
    title: "Dua To Make Heart Firm Upon Deen #3",
    arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
    transliteration: "rabbana la tuzigh qulubana ba'da idh hadaytana",
    translation: "O our Lord, do not make our hearts incline to error after You have guided us.",
    benefits: "A person's heart is between the fingers of Allah ta'ala, and He turns it back and forth according to his will. So, it is appropriate for someone to always ask that Allah will set their heart on goodness, and always be istiqamah in the truth.",
    reference: "QS. Ali Imran: 8",
    category: "general"
  },
  {
    id: 71,
    title: "Dua To Seek Refuge Against The Loss Of Pleasure",
    arabic: "اللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ",
    transliteration: "allahumma inni a'oodhu bika min zawali ni'matika wa tahawwuli 'afiyatika wa fujaa'ati niqmatika wa jami'i sakhatika",
    translation: "O Allah, I seek refuge in You from the loss of the pleasures that You have bestowed, from changes in the health that You have bestowed, from Your sudden torment, and from all Your wrath.",
    benefits: "The pleasures of being present at this time are very likely to be lost, the health of our souls and bodies in a blink of an eye can turn into illness, and only Allah can prevent that from happening.",
    reference: "HR. Muslim No. 2739",
    category: "general"
  },
  {
    id: 72,
    title: "Dua To Resist Affliction",
    arabic: "اللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنْ جَهْدِ البَلاَءِ ، وَدَرَكِ الشَّقَاءِ ، وَسُوءِ القَضَاءِ ، وَشَمَاتَةِ الأَعْدَاء",
    transliteration: "allahumma inni a'oodhu bika min jahdil-bala'i, wa darakish-shaqaa'i, wa su'il-qadaa'i, wa shamataatil-a'daa",
    translation: "Seek refuge in God from severe calamity, being overtaken by misery, evil destiny, and the triumphant mockery of enemies.",
    benefits: "Taking refuge from the provisions of fate that have a bad impact, does not contradict the attitude of being pleased with the provisions of the destiny of Allah azza wa jalla. Because asking for protection from the provision of Allah's destiny. Allah azza wa jalla could have predestined a disaster for someone, but Allah azza wa jalla also predestined that if he prays, Allah will remove the disaster.",
    reference: "HR. al-Bukhari: 6616, Muslim: 2707",
    category: "general"
  },
  {
    id: 73,
    title: "Dua To Be Released From Debt, Anxiety, Weakness, Laziness, Fear, And Pressure from Others",
    arabic: "اَللّٰهُمَّ إِنِّى أَعُوْذُبِكَ مِنَ الْهَمِّ وَالْحَزْنِ وَأَعُوْذُبِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوْذُبِكَ مِنَ الْجُبْنِ وَالْبُخْلِ وَأَعُوْذُبِكَ مِنْ غَلَبَتِ الدَّيْنِ وَقَهْرِ الرجال",
    transliteration: "allahumma inni a'oodhu bika minal-hammi wal-huzni wa a'oodhu bika minal-'ajzi wal-kasali wa a'oodhu bika minal-jubni wal-bukhli wa a'oodhu bika min ghalabatid-dayni wa qahrir-rijal",
    translation: "O Allah, I seek refuge in Thee from care and grief, I seek refuge in Thee from incapacity and slackness, I seek refuge in Thee from cowardice and niggardliness, and I seek in Thee from being overcome by debt and being put in subjection by men.",
    benefits: "A noble sahaba, Abu Umamah, who narrated this hadith, said: after I practiced this prayer, Allah completely removed my confusion and gave me the ability to pay off debts.",
    reference: "HR. Abu Dawud No. 1555",
    category: "general"
  },
  {
    id: 74,
    title: "Dua When Getting Good News",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِى بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
    transliteration: "alhamdu lillahi alladhi bini'matihi tattimmu assalihat",
    translation: "Praise be to Allah, by whose grace goodness is perfected.",
    benefits: "Aisha radhiyallahu 'anha said, Rasulullah shallallahu 'alaihi wa sallam when he saw something he liked, he read the sentence above.",
    reference: "HR. Ibnu Majah in the Sunnan, No. 3803 and al-Hakim in al-Mustadrak (1/499)",
    category: "general"
  }
]

export const getDailyDua = () => {

  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const duaIndex = dayOfYear % allDuas.length;
  return {
    ...allDuas[duaIndex],
    responsiveStyle: {
      fontSize: '1.6rem',
      padding: '1rem',
    },
  };
};

export const getAllDuaCategories = () => {
  return ["Morning", "Evening", "Sleep", "General"];
};


export const categories = [
  { value: 'all', label: 'All Duas' },
  { value: 'morning', label: 'Morning' },
  { value: 'evening', label: 'Evening' },
  { value: 'protection', label: 'Protection' },
  { value: 'sleep', label: 'Sleep' },
  { value: 'family', label: 'Family' },
  { value: 'eating', label: 'Eating' },
  { value: 'home', label: 'Home' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'prayer', label: 'Prayer' },
  { value: 'distress', label: 'Distress' }
];


export const fetchDuas = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return allDuas;
};

export default allDuas;
