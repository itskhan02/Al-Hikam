import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { IoHome } from 'react-icons/io5';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Button, Layout, Menu, theme, Input, Switch } from 'antd'; 
import "./Css/Style.css";
import Main from './Main';
import { useNavigate } from 'react-router-dom';
import { FaBookReader } from 'react-icons/fa';
import { PiBooksBold } from 'react-icons/pi';
import nameIcon from '/Allah.png'
import duaIcon from '/dua.png';
import salahIcon from '/salah1.png'; 
import bookIcon from '/audiobook.png';

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [searchValue, setSearchValue] = useState(''); 
  const [darkMode, setDarkMode] = useState(() => {
  
    return localStorage.getItem('darkMode') === 'true';
  }); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  useEffect(() => {
  
    localStorage.setItem('darkMode', darkMode);
    document.body.style.backgroundColor = darkMode ? '#1c1e26' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#1c1e26';
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const handleSearch = (value) => {
  //   const searchQuery = value.toLowerCase();
  //   if (searchQuery.includes('quran')) {
  //     navigate('/quran');
  //   } else if (searchQuery.includes('translation')) {
  //     navigate('/quranaudio');
  //   } else if (searchQuery.includes('prayer')) {
  //     navigate('/prayer');
  //   } else if (searchQuery.includes('names')) {
  //     navigate('/name');
  //   } else {
  //     console.log('No matching module found for:', value); // Handle unmatched queries
  //   }
  // };

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <Layout className={`ant-layout ${darkMode ? "dark-mode" : "light-mode"}`} style={{ background: darkMode ? '#1c1e26' : '#fff', padding: '1rem' }}>
      <Sider
        trigger={null}
        collapsible
        width={windowWidth <= 768 ? 100 : 230}
        collapsed={collapsed}
        collapsedWidth={ 0}
        style={{
          fontWeight: 'bold',
          background: darkMode ? '#1c1e26' : '#fff',
          minHeight: '100vh',
          position: 'fixed',
          backgroundColor: 'transparent',
          zIndex: 1000,
          left: 0,
          top: 0,
          bottom: 0,
          transition: 'all 0.2s',
        }}
        breakpoint="md"
        onBreakpoint={broken => setCollapsed(broken)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme={darkMode ? "dark" : "light"} 
          mode="inline"
          onClick={({ key }) => {
            if (key) navigate(`/${key}`); 
          }}
          defaultSelectedKeys={['']}
          style={{
            textAlign: 'start',
            color: darkMode ? '#fff' : '#1c1e26', 
          }}
          items={[
            {
              key: "",
              icon: <IoHome style={{ fontSize: windowWidth <= 768 ? '2.2rem' : '2rem', color: darkMode ? '#fff' : 'black' }} />, 
              label: windowWidth <= 768 ? '' : 'Home',
            },
            {
              key: "quran",
              icon:  <FaBookReader  style={{ fontSize: windowWidth <= 768 ? '2.2rem' : '2rem', color: darkMode ? '#fff' : 'black' }}/>, 
              label: windowWidth <= 768 ? '' : 'Quran',
            },
            {
              key: "quranaudio",
              icon:  <FaBookReader  style={{ fontSize: windowWidth <= 768 ? '2.2rem' : '2rem', color: darkMode ? '#fff' : 'black' }}/>, 
              label: windowWidth <= 768 ? '' : 'Quran Translation',
            },
            // {
            //   key: 'hadith',
            //   icon: <PiBooksBold  style={{ fontSize: windowWidth <= 768 ? '2.2rem' : '2rem', color: darkMode ? '#fff' : 'black' }} />,
            //   label: windowWidth <= 768 ? '' : 'Hadith',
            // },
            {
              key: 'prayer',
              icon: <img src={salahIcon} style={{ width: windowWidth <= 768 ? '3.5rem' : '3.5rem',  height: windowWidth <= 768 ? '3.5rem' : '3.5rem', color: darkMode ? '#fff' : 'black' }} />,
              label: windowWidth <= 768 ? '' : 'Prayer Times',
            },
            {
              key: 'name',
              icon: <img src={nameIcon} style={{ width: windowWidth <= 768 ? '3.5rem' : '4rem', height: windowWidth <= 768 ? '3.5rem' : '4rem', color: darkMode ? '#fff' : 'black' }} />,
              label: windowWidth <= 768 ? '' : '99 Names of Allah',
            },
            {
              key: 'dua',
              icon: <img src={duaIcon} style={{ width: windowWidth <= 768 ? '2.5rem' : '2.5rem', height: windowWidth <= 768 ? '2.5rem' : '2.5rem', color: darkMode ? '#fff' : 'black' }} />, 
              label: windowWidth <= 768 ? '' : 'Duas',
            },
            // {
            //   key: 'qibla',
            //   //icon: 
            //   label: 'Qibla Finder',
            // },
            // {
            //   key: 'calendar',
            //   //icon: 
            //   label: 'Islamic Calendar',
            // },
            // {
            //   key: 'story',
            //   //icon: 
            //   label: 'Companion Stories',
            // },
            //{
            //   key: 'history',
            //   //icon: 
            //   label: 'Islamic History',
            // },

          ]}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 0 : (windowWidth <= 768 ? 100 : 230),
          transition: 'margin-left 0.2s',
          minHeight: '100vh',
        }}
      >
        <Header
          style={{
            padding: 0,
            background: darkMode ? '#1c1e26' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            minHeight: 64,
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '1rem',
            padding: '0.5rem 1rem',
            boxSizing: 'border-box',
          }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '3.5rem',
                color: darkMode ? '#fff' : '#1c1e26',
                width: 48,
                height: 48,
                minWidth: 32,
                minHeight: 32,
              }}
            />
            <span
              className="titlename"
              style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                flex: 1,
                minWidth: 120,
              }}
            >
              <a href="/" style={{ color: darkMode ? '#fff' : '#1c1e26' }}>Al-Hikam</a>
            </span>
            <div className='title' style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginLeft: 'auto',
            }}>
              {/* <Input.Search
                placeholder="Search..."
                allowClear
                onSearch={handleSearch}
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                style={{ maxWidth: 350 }}
              /> */}
              {/* {!(windowWidth <= 768 && !collapsed) && (
                <Switch
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  checkedChildren={<MdDarkMode style={{ fontSize: '2rem' }} />}
                  unCheckedChildren={<MdLightMode style={{ fontSize: '2rem' }} />}
                  style={{ maxWidth: 32, marginLeft: '7%', marginRight: '5%' }}
                />
              )} */}
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '3px 3px',
            padding: 0,
            minHeight: 300,
            background: darkMode ? '#1c1e26' : '#fff',
            borderRadius: borderRadiusLG,
            color: darkMode ? '#fff' : '#1c1e26',
            width: '100%',
            boxSizing: 'border-box',
            overflowX: 'auto',
          }}
        >
          <Main siderCollapsed={collapsed} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;