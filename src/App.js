import React from 'react';
import { Layout } from 'antd';
import Chat from './components/Chat';
import AppHeader from './components/Header'; 

const { Content } = Layout;

const App = () => {
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Content style={{ padding: '20px' }}>
        <Chat />
      </Content>
    </Layout>
  );
};

export default App;
