import React from "react";
import Navbar from "../Navbar";
import TermServiceContent from "../TermServiceContent";
import TermServiceContentPreview from "../TermServiceContentPreview";
import Footer from "../Footer";
import {useLocation } from 'react-router-dom';

const Featured = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <Navbar/>
      {pathname === "/terms-of-service" || pathname === "/terms-of-service/" ? (
          <TermServiceContent/>
      ) : (
        <TermServiceContentPreview/>
      )}
      <Footer/>
    </>
  );
};

export default Featured;