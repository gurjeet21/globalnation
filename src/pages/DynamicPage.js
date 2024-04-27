import React from "react";
import Navbar from "../Navbar";
import DynamicPageContent from "../DynamicPageContent";
import Footer from "../Footer";

const DynamicPage = () => {
  return (
    <>
      <Navbar/>
        <DynamicPageContent/>
      <Footer/>
    </>
  );
};

export default DynamicPage;
