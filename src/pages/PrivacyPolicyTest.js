import React from "react";
import Navbar from "../Navbar";
import PrivacyPolicyContentTest from "../PrivacyPolicyContentTest";
import PrivacyPolicyContentPreview from "../PrivacyPolicyContentPreview";
import Footer from "../Footer";
import {useLocation } from 'react-router-dom';

const Featured = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <Navbar/>
      {pathname === "/privacy-policy-test" || pathname === "/privacy-policy-test/" ? (
          <PrivacyPolicyContentTest/>
      ) : (
        <PrivacyPolicyContentPreview/>
      )}
      <Footer/>
    </>
  );
};

export default Featured;
