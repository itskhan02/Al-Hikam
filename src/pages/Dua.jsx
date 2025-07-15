import React, { useState, useEffect } from 'react';
import { Input, Tabs, Spin, Button, Badge } from 'antd';
import { FaSearch, FaHeart, FaRegHeart } from 'react-icons/fa';
import allDuas, { categories, fetchDuas } from '../components/Duas.jsx';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5'; 


const { TabPane } = Tabs;

const Dua = () => {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState("1");
  const [duas, setDuas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('duaFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const fetchDuas = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return allDuas;
  };

  useEffect(() => {
    const loadDuas = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDuas();
        if (!data || !Array.isArray(data)) {
          throw new Error('Failed to load duas. Please check the data source.');
        }
        setDuas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadDuas();
  }, []);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id];
      localStorage.setItem('duaFavorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const filteredDuas = (selectedCategory === 'all'
    ? duas
    : duas.filter(dua => dua.category === selectedCategory)
  ).filter(dua =>
    dua.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dua.arabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dua.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate= useNavigate();

  return (

    <>
    <div className='col-12'>
          <button className='btn btn-secondary mb-3' onClick={()=>navigate(-1)}>
            <IoChevronBack/>
          </button>
        </div>
    <div className='dua' style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>
        Daily Dua & Dhikr
      </h1>

      {error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      ) : (
        <Tabs activeKey={activeTab} onChange={setActiveTab} centered>
          <TabPane tab="Daily Duas" key="1">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '5rem' }}>
                <Spin size="large" />
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <Input
                    placeholder="Search duas..."
                    prefix={<FaSearch />}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ marginBottom: '10px' }}
                  />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {filteredDuas.length > 0 ? (
                  <div style={{ marginTop: '20px', width: '92%', display: 'flex', alignContent: 'center', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto', }}>
                    {filteredDuas.map(dua => (
                      <div className='dua-card'
                        key={dua.id}
                        style={{
                          border: '1px solid #ddd',
                          borderRadius: '.8rem',
                          padding: '1rem',
                          marginBottom: '1rem',
                          backgroundColor: '#f9f9f9',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h3 style={{ margin: 0, fontSize:'2.2rem', fontWeight: '500', }}>{dua.title}</h3>
                          <button
                            onClick={() => toggleFavorite(dua.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              color: favorites.includes(dua.id) ? 'red' : 'gray',
                            }}
                          >
                            {favorites.includes(dua.id) ? <FaHeart /> : <FaRegHeart />}
                          </button>
                        </div>
                        <p style={{ textAlign: 'right', fontSize: '2.8rem', fontFamily: 'Traditional Arabic', paddingRight:'3rem', }}>
                          {dua.arabic}
                        </p>
                        <p  style={{ padding: '10px', borderRadius: '5px' }}>
                        <strong>Transliteration:</strong> {dua.transliteration}</p>
                        <p  style={{ padding: '10px', borderRadius: '5px' }}>
                        <strong>Translation:</strong> {dua.translation}</p>
                        {dua.benefits && (
                          <div style={{ padding: '10px', borderRadius: '5px' }}>
                            <p><strong>Benefits:</strong> {dua.benefits}</p>
                          </div>
                        )}
                        <Badge color="green" style={{ padding: '1.5rem', fontSize: '1.6rem', borderRadius: '5px' }}>
                          <strong>{dua.reference}</strong>
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{fontSize:'2rem', textAlign: 'center', color: '#888' }}>No duas found for this category</p>
                )}
              </div>
            )}
          </TabPane>

          <TabPane tab="Dhikr Counter" key="2">
            <div style={{ textAlign: 'center', marginBottom: '12rem' }}>
              <h2>Dhikr Counter</h2>
              <h1 style={{ fontSize: '48px', margin: '20px 0' }}>{count}</h1>
              <div>
                <Button type="primary" onClick={incrementCount} style={{ marginRight: '10px' }}>
                  Count
                </Button>
                <Button onClick={resetCount}>Reset</Button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      )}
    </div>
    </>
  );
};

export default Dua;



