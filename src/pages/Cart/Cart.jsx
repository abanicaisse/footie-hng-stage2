import React from "react";

import "./cart.css";

import { Navbar, Footer, CartItem, Trending, CartHero } from "../../components";
import { arrowRightOrange } from "../../assets";

const Cart = ({ windowWidth, setWindowWidth, allProducts }) => {
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
      />
      <CartItem allProducts={allProducts} />
      <Trending
        header={trendingHeader}
        orangeText={trendingOrangeTxt}
        icon={trendingIcon}
        // trendingShoes={trendingShoes}
      />
      <Footer />
    </>
  );
};

export default Cart;
