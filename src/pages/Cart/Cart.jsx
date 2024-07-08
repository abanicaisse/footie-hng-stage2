import React from "react";

import "./cart.css";

import { Navbar, Footer, CartItem, Trending, CartHero } from "../../components";
import { arrowRightOrange } from "../../assets";

const Cart = ({ windowWidth, setWindowWidth }) => {
  const trendingHeader = "Similar Products";
  const trendingOrangeTxt = "Browse more";
  const trendingIcon = arrowRightOrange;
  return (
    <>
      <Navbar />
      <CartHero windowWidth={windowWidth} setWindowWidth={setWindowWidth} />
      {/* <HeroCaroussel
        windowWidth={windowWidth}
        setWindowWidth={setWindowWidth}
      /> */}
      <CartItem />
      <Trending
        header={trendingHeader}
        orangeText={trendingOrangeTxt}
        icon={trendingIcon}
      />
      <Footer />
    </>
  );
};

export default Cart;
