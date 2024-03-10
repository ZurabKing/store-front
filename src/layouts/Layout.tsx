import { FC } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const { Content } = Layout;

export const MainLayout: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            height: "calc(100vh - 160px)",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};
