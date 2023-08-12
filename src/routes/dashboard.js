import React, { useState } from "react";
import { Layout, Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import AppContent from "./appContent";
import SideBar from "../components/Sidebar/SideBar";

const { Header, Sider, Content, Footer } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      {/************************************* sideBar *****************************************/}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SideBar />
      </Sider>
      {/************************************* dashboard layout *****************************************/}
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        {/******* Dashboard content ********/}

        <Content
          style={{
            overflow: "scroll",
            margin: "24px 16px",
            minHeight: "calc(100vh - 179px)",
            padding: "24px",
            background: colorBgContainer,
          }}
        >
          <AppContent />
        </Content>

        {/********* Footer **********/}

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          REPLIQ©2023 Created by kamruzzaman
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
