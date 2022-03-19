import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
const { Content, Header, Footer } = Layout;

const AppLayout = () => {
  return (
    <div>
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header className="header">
          <Navbar />
        </Header>
        <Content className="content">
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Mini App 2022</Footer>
      </Layout>
    </div>
  );
};

export default AppLayout;
