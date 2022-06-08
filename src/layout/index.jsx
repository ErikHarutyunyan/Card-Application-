import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/";
import { Outlet } from "react-router-dom";
import { LayoutWrapper, ContentWrapper } from "./Layout.styles";
import Instructions from "../components/Instructions";
const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <ContentWrapper>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </ContentWrapper>
        <Instructions />
      </LayoutWrapper>    </>
  );
};

export default Layout;
