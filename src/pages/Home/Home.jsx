import React from "react";

import { Navbar, Hero, Trending, Showcase, Footer } from "../../components";

import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
      <Showcase />
      <Footer />
    </>
  );
};

export default Home;
