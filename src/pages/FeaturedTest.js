import React from "react";
import Navbar from "../Navbar";
import FeaturedArtist from "../FeaturedArtist";
import FeaturedArtistTest from "../FeaturedArtistTest";
import FeaturedArtistPreview from "../FeaturedArtistPreview";
import Footer from "../Footer";
import {useLocation } from 'react-router-dom';

const Featured = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <Navbar/>
      {pathname === "/featured-test" || pathname === "/featured-test/" ? (
          <FeaturedArtistTest/>
      ) : (
        <FeaturedArtistPreview/>
      )}
      <Footer/>
    </>
  );
};

export default Featured;
