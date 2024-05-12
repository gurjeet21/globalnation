import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import DynamicPageContent from "../DynamicPageContent";
import Footer from "../Footer";
import Interocitor from "./Interocitor";
import Demo from "./Demo";
import { useLocation } from 'react-router-dom';

const DynamicPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const [pageUrl, setPageUrl] = useState(null);

  useEffect(() => {
    setPageUrl(pathname);
  }, [pathname]);

  return (
    <>
      <Navbar />
      {pageUrl === '/demo' ? (
        <Demo />
      ) : pageUrl === '/interocitor' ? (
        <Interocitor />
      ) : (
        <DynamicPageContent />
      )}
      <Footer />
    </>
  );
};

export default DynamicPage;
