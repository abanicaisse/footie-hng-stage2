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
  isLoadingData,
  setIsLoadingData,
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
        allProducts={allProducts}
        isLoadingData={isLoadingData}
        setIsLoadingData={setIsLoadingData}
        carouselShoes={carouselShoes}
      />
      <Trending
        header={trendingHeader}
        orangeText={trendingOrangeTxt}
        icon={trendingIcon}
        allProducts={allProducts}
        trendingShoes={trendingShoes}
      />
      <Showcase
        allProducts={allProducts}
        isLoadingData={isLoadingData}
        setIsLoadingData={setIsLoadingData}
      />
      <Footer />
    </>
  );
};

export default Home;
