import React from "react";

import {
  Navbar,
  Trending,
  Showcase,
  Footer,
  HeroCaroussel,
} from "../../components";

import "./home.css";
import { arrowDown } from "../../assets";

const Home = ({ windowWidth, setWindowWidth }) => {
  const trendingHeader = "Trending Now";
  const trendingOrangeTxt = "Sort by";
  const trendingIcon = arrowDown;
  return (
    <>
      <Navbar windowWidth={windowWidth} setWindowWidth={setWindowWidth} />
      <HeroCaroussel
        windowWidth={windowWidth}
        setWindowWidth={setWindowWidth}
      />
      <Trending
        header={trendingHeader}
        orangeText={trendingOrangeTxt}
        icon={trendingIcon}
      />
      <Showcase />
      <Footer />
    </>
  );
};

export default Home;
