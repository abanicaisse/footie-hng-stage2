import React from "react";

import "./cart.css";

import { Navbar, Footer, CartItem, Trending, CartHero } from "../../components";
import { arrowRightOrange } from "../../assets";

const Cart = ({
  windowWidth,
  setWindowWidth,
  allProducts,
  isLoadingData,
  setIsLoadingData,
}) => {
  const trendingHeader = "Similar Products";
  const trendingOrangeTxt = "Browse more";
  const trendingIcon = arrowRightOrange;

  const cartItems = [allProducts[17], allProducts[18], allProducts[19]];
  return (
    <>
      <Navbar />
      <CartHero
        windowWidth={windowWidth}
        setWindowWidth={setWindowWidth}
        allProducts={allProducts}
        isLoadingData={isLoadingData}
        setIsLoadingData={setIsLoadingData}
      />
      <CartItem allProducts={allProducts} />
      <Trending
        header={trendingHeader}
        orangeText={trendingOrangeTxt}
        icon={trendingIcon}
        allProducts={allProducts}
        isLoadingData={isLoadingData}
        setIsLoadingData={setIsLoadingData}
        // trendingShoes={trendingShoes}
      />
      <Footer />
    </>
  );
};

export default Cart;
