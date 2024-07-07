import React from "react";

import { Navbar, Hero, Trending, Showcase } from "../../components";

import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
      <Showcase />
    </>
  );
};

export default Home;
