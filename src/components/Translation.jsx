import React from 'react';
import { Layout, Menu, theme } from 'antd';
import English from '../pages/English';
import Arabic from '../pages/Arabic';
import Transliteration from '../pages/Transliteration';

const { Header, Content } = Layout;

const Translation = ({ showTranslation, setShowTranslation, darkMode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ width: '95%', alignContent: 'center', marginTop: '3rem', border: `2px solid ${darkMode ? '#fff' : '#000'}` }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          height: '50px',
        }}
      >
        <Menu
          className='translation-menu'
          theme={darkMode ?  "light" : "dark" }
          mode="horizontal"
          style={{ height: '50px', display: 'flex', width:'90%', justifyContent:'flex-start' }}
          selectedKeys={[showTranslation]} 
          onClick={({ key }) => setShowTranslation(key)} 
          items={[
            {
              key: 'transliteration',
              label: 'Transliteration',
            },
            {
              key: 'english',
              label: 'English',
            },
            {
              key: 'arabic',
              label: 'Arabic',
            },
          ]}
        />
      </Header>
      <Content>
        <div
          className={`translation-container mt-3`}
          style={{
            padding: 24,
            color: darkMode ? '#fff' : '#000',
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          {showTranslation === 'transliteration' && <Transliteration />}
          {showTranslation === 'english' && <English />}
          {showTranslation === 'arabic' && <Arabic />}
        </div>
      </Content>
    </Layout>
  );
};

export default Translation;