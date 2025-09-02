import React from "react";
import Navbar from "../src/components/Navbar";
import "../src/App.css";
import Banner from "../src/components/Banner";
import Skills from "../src/components/Skills";
import Experience from "../src/components/Experience";
import Portfolio from "../src/components/Portfolio";
import Footer from "../src/components/Footer";
import Gallery from "../src/components/Gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Portfolio />
      <Gallery />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
