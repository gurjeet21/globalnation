import React from "react";
import Navbar from "../Navbar";
import PrivacyPolicyContent from "../PrivacyPolicyContent";
import PrivacyPolicyContentPreview from "../PrivacyPolicyContentPreview";
import Footer from "../Footer";
import {useLocation } from 'react-router-dom';

const Featured = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <Navbar/>
      {pathname === "/privacy-policy" || pathname === "/privacy-policy/" ? (
          <PrivacyPolicyContent/>
      ) : (
        <PrivacyPolicyContentPreview/>
      )}
      <Footer/>
    </>
  );
};

export default Featured;
