import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Code Corner" scroll>
          <Navigation>
            <a href="#">Sign in</a>
            <a href="#">Login</a>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">Python</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
