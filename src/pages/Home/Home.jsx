import React from "react";

import { Navbar, Hero, Trending } from "../../components";

import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
    </>
  );
};

export default Home;
