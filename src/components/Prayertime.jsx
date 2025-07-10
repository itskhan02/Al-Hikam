import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CalculationMethod, PrayerTimes, Coordinates } from 'adhan';
import { GrLocation } from 'react-icons/gr';


const Prayertime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState('Fetching...');
  const [customLocation, setCustomLocation] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Get user's location (works for all screen sizes)
  useEffect(() => {
    // Prefer browser geolocation if available and permitted
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          async (err) => {
            // If denied or fails, fallback to Google Geolocation API
            try {
              const response = await fetch(
                'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCxJjjmslMpmhSwxDPqUOdA_tDaFdv_ccg',
                { method: 'POST' }
              );
              const data = await response.json();
              if (data.location && data.location.lat && data.location.lng) {
                setLocation({ latitude: data.location.lat, longitude: data.location.lng });
              } else {
                setError('Unable to retrieve your location.');
              }
            } catch (apiErr) {
              setError('Unable to retrieve your location.');
              console.error(apiErr);
            }
          }
        );
      } else {
        // If no geolocation support, fallback to Google Geolocation API
        (async () => {
          try {
            const response = await fetch(
              'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCxJjjmslMpmhSwxDPqUOdA_tDaFdv_ccg',
              { method: 'POST' }
            );
            const data = await response.json();
            if (data.location && data.location.lat && data.location.lng) {
              setLocation({ latitude: data.location.lat, longitude: data.location.lng });
            } else {
              setError('Unable to retrieve your location.');
            }
          } catch (apiErr) {
            setError('Unable to retrieve your location.');
            console.error(apiErr);
          }
        })();
      }
    };

    getLocation();
  }, []);

  // Fetch location name using Google Maps Geocoding API
  useEffect(() => {
    if (!location) return;

    const fetchLocationName = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyCxJjjmslMpmhSwxDPqUOdA_tDaFdv_ccg`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          // Prefer locality, then administrative_area_level_1, then formatted address
          let city = '';
          const addressComponents = data.results[0].address_components;
          for (let comp of addressComponents) {
            if (comp.types.includes('locality')) {
              city = comp.long_name;
              break;
            }
          }
          // Fallback: if city is still empty, try 'administrative_area_level_2'
          if (!city) {
            for (let comp of addressComponents) {
              if (comp.types.includes('administrative_area_level_1')) {
                  city = comp.long_name;
                  break;
                }
              }
          }
          setLocationName(city || data.results[0].formatted_address);
        } else {
          setLocationName('Unknown Location');
        }
      } catch (err) {
        console.error('Error fetching location name:', err);
        setLocationName('Error fetching location');
      }
    };

    fetchLocationName();
  }, [location]);

  // Calculate prayer times based on location
  useEffect(() => {
    if (!location) return;

    const coordinates = new Coordinates(location.latitude, location.longitude);
    const params = CalculationMethod.MuslimWorldLeague();
    const today = new Date();

    const times = new PrayerTimes(coordinates, today, params);

    setPrayerTimes({
      fajr: format(times.fajr, 'hh:mm a'),
      sunrise: format(times.sunrise, 'hh:mm a'),
      dhuhr: format(times.dhuhr, 'hh:mm a'),
      asr: format(times.asr, 'hh:mm a'),
      maghrib: format(times.maghrib, 'hh:mm a'),
      isha: format(times.isha, 'hh:mm a'),
      sunriseTimestamp: times.sunrise.getTime(),
      sunsetTimestamp: times.maghrib.getTime(),
    });
  }, [location]);

  const handleCustomLocationSubmit = () => {
    // Use a geocoding API to convert the custom location into coordinates
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            customLocation
          )}&key=YOUR_API_KEY`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry;
          setLocation({ latitude: lat, longitude: lng });
          setLocationName(data.results[0].formatted);
        } else {
          setError('Unable to find location.');
        }
      } catch (err) {
        console.error('Error fetching coordinates:', err);
        setError('Error fetching coordinates.');
      }
    };

    fetchCoordinates();
  };

  const handleReload = () => {
    setError(null);
    setLocation(null);
    setLocationName('Fetching...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (err) => {
        setError('Unable to retrieve your location.');
        console.error(err);
      }
    );
  };

  const handleLocationInputChange = (e) => {
    setCustomLocation(e.target.value);
  };

  const handleLocationFetch = async () => {
    if (!customLocation.trim()) {
      setError('Please enter a location name.');
      return;
    }

    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          customLocation
        )}&key=YOUR_API_KEY`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status.message || 'Failed to fetch location data.');
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        setLocation({ latitude: lat, longitude: lng });
        setLocationName(data.results[0].formatted);
        setError(null);
      } else {
        setError('Unable to find the specified location. Please try again.');
      }
    } catch (err) {
      console.error('Error fetching location:', err);
      setError('Error fetching location. Please check your API key or internet connection.');
    }
  };

  const handleSetRealTimeLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setError(null);
    setLocationName('Fetching...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (err) => {
        setError('Unable to retrieve your location.');
        console.error(err);
      }
    );
  };

  const handleNavigateToLocation = () => {
    if (location) {
      const { latitude, longitude } = location;
      window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
    } else {
      setError('Location is not available.');
    }
  };

  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
        <button
          onClick={handleReload}
          style={{
            padding: '5px 10px',
            marginTop: '10px',
            cursor: 'pointer',
            backgroundColor: '#FF6347',
            borderRadius: '5px',
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!prayerTimes) {
    return <div style={{ fontSize: '2rem' }}>Loading prayer times...</div>;
  }

  // Determine day or night based on sunrise and sunset
  let isDayTime = true;
  if (prayerTimes.sunriseTimestamp && prayerTimes.sunsetTimestamp) {
    const now = currentTime.getTime();
    isDayTime = now >= prayerTimes.sunriseTimestamp && now < prayerTimes.sunsetTimestamp;
  } else {
    const currentHour = currentTime.getHours();
    isDayTime = currentHour >= 6 && currentHour < 18;
  }

  const backgroundImage = isDayTime
    ? 'url("/nbg1.jpg")'
    : 'url("/nbg.jpg")';

  // current prayer time
  const getCurrentPrayer = () => {
    const now = currentTime;
    // Only use the prayer names, not the timestamp keys
    const prayerNames = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const prayerEntries = prayerNames.map(name => [name, prayerTimes[name]]);

    for (let i = 0; i < prayerEntries.length - 1; i++) {
      const [currentName, currentTimeStr] = prayerEntries[i];
      const [nextName, nextTimeStr] = prayerEntries[i + 1];

      const currentPrayerTime = new Date(`${format(now, 'yyyy-MM-dd')}T${convertTo24(currentTimeStr)}`);
      const nextPrayerTime = new Date(`${format(now, 'yyyy-MM-dd')}T${convertTo24(nextTimeStr)}`);

      if (now >= currentPrayerTime && now < nextPrayerTime) {
        return { name: currentName, time: currentTimeStr };
      }
    }
    // If after isha, show isha
    const [lastName, lastTimeStr] = prayerEntries[prayerEntries.length - 1];
    return { name: lastName, time: lastTimeStr };
  };

  // Helper to convert 'hh:mm a' to 'HH:mm:00'
  function convertTo24(timeStr) {
    // timeStr is like '05:12 AM' or '07:45 PM'
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours, 10);
    if (modifier.toLowerCase() === 'pm' && hours !== 12) {
      hours += 12;
    }
    if (modifier.toLowerCase() === 'am' && hours === 12) {
      hours = 0;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes}:00`;
  }

  const currentPrayerObj = getCurrentPrayer();

  return (
    <>
      <div
        className="namaz-container"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: isDayTime ? 'black' : 'white',
          width: '100%',
          height: 'auto',
          padding: '1rem',
        }}
      >
        <div className="namaz-title">
          <div className="namaz-location" >
            <h1>Namaz Times</h1>
            <p><GrLocation />{locationName}</p>
          </div>
          <div className="namaz-current-time" style={{ fontSize: '2.2rem', marginRight: '3.7rem' }}>
            {format(currentTime, 'hh:mm:ss a')}
          </div>
        </div>
        <div className='current-prayer'>
          {currentPrayerObj.name.charAt(0).toUpperCase() + currentPrayerObj.name.slice(1)}: {currentPrayerObj.time}
        </div>
        <div
          className="namaz-prayer-times"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.6rem',
            marginTop: '1rem',
          }}
        >
          {Object.entries(prayerTimes)
            .filter(([name]) => name !== 'sunriseTimestamp' && name !== 'sunsetTimestamp') // Hide timestamps
            .filter(([name]) => ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'].includes(name))
            .map(([name, time]) => (
            <React.Fragment key={name}>
              <div
                style={{
                  fontSize: name === currentPrayerObj.name ? '2.5rem' : '2rem',
                  fontWeight: name === currentPrayerObj.name ? 'bold' : 'normal',
                  backgroundColor: name === currentPrayerObj.name ? '#1E90FF' : 'transparent',
                  borderRadius: name === currentPrayerObj.name ? '5px' : '0',
                  padding: name === currentPrayerObj.name ? '5px' : '0',
                }}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}:
              </div>
              <div
                style={{
                  fontSize: name === currentPrayerObj.name ? '2.5rem' : '2rem',
                  fontWeight: name === currentPrayerObj.name ? 'bold' : 'normal',
                  backgroundColor: name === currentPrayerObj.name ? '#1E90FF' : 'transparent',
                  borderRadius: name === currentPrayerObj.name ? '5px' : '0',
                  padding: name === currentPrayerObj.name ? '5px' : '0',
                }}
              >
                {time}
              </div>
            </React.Fragment>
          ))}
        </div>

        <div style={{ marginTop: '20px' }}>
          <button
            onClick={handleSetRealTimeLocation}
            style={{
              padding: '5px 10px',
              marginLeft: '10px',
              cursor: 'pointer',
              backgroundColor: '#03890d',
              borderRadius: '5px',
            }}
          >
            Set  Location
          </button>
          <br />
        </div>
      </div>
    </>
  );
};

export default Prayertime;
