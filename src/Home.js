import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import CreateUniqueExperience from "./CreateUniqueExperience";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services/>
      <CreateUniqueExperience/>
      <Footer />
    </>
  );
};

export default Home;
