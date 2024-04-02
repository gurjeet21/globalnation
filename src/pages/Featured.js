import React from "react";
import Navbar from "../Navbar";
import FeaturedArtist from "../FeaturedArtist";
import FeaturedArtistPreview from "../FeaturedArtistPreview";
import Footer from "../Footer";
import {useLocation } from 'react-router-dom';

const Featured = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <Navbar/>
      {pathname === "/featured" || pathname === "/featured/" ? (
          <FeaturedArtist/>
      ) : (
        <FeaturedArtistPreview/>
      )}
      <Footer/>
    </>
  );
};

export default Featured;
