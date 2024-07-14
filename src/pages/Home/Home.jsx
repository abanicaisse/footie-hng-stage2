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
// import { carouselShoes } from "../../data/products";

const Home = ({
  windowWidth,
  setWindowWidth,
  allProducts,
  carouselShoes,
  trendingShoes,
}) => {
  const trendingHeader = "Trending Now";
  const trendingOrangeTxt = "Sort by";
  const trendingIcon = arrowDown;

  return (
    <>
      <Navbar windowWidth={windowWidth} setWindowWidth={setWindowWidth} />
      <HeroCaroussel
        windowWidth={windowWidth}
        setWindowWidth={setWindowWidth}
        allProducts={allProducts}
        carouselShoes={carouselShoes}
      />
      <Trending
        header={trendingHeader}
        orangeText={trendingOrangeTxt}
        icon={trendingIcon}
        allProducts={allProducts}
        trendingShoes={trendingShoes}
      />
      <Showcase allProducts={allProducts} />
      <Footer />
    </>
  );
};

export default Home;
