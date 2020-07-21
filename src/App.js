import React from "react";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList,
} from "react-mdl";

import "./App.css";
import { Link } from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Code Corner" scroll>
          <Navigation>
            <Link to="signIn">Sign in</Link>
            <Link to="login">Login</Link>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <Link to="htmlPage">HTML</Link>
            <Link to="cssPage">CSS</Link>
            <Link to="pythonPage">Python</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        <Footer size="mega">
          <FooterSection type="middle">
            <FooterDropDownSection title="Features">
              <FooterLinkList>
                <a href="#">About us</a>
                <a href="#">Terms</a>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Contact us">
              <FooterLinkList>
                <a href="#">Contact number</a>
                <a href="#">Email</a>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="FAQ">
              <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
              </FooterLinkList>
            </FooterDropDownSection>
          </FooterSection>
          <FooterSection type="bottom" logo="Code Corner Inc.">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
