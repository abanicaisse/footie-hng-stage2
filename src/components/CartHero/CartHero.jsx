import React from "react";

import {
  arrowRightWhite,
  searchIconEmpty,
  shoe1,
  shoe2,
  shoe2Mobile,
} from "../../assets";

import "./cart-hero.css";

const Hero = ({ windowWidth, allProducts }) => {
  const cartItems = [allProducts[17], allProducts[18], allProducts[19]];
  // console.log(allProducts);
  return (
    <>
      <section className="hero-section ">
        <div className="max-screen-width hero-container cart-hero">
          {windowWidth < 800 ? (
            <img
              src={`https://api.timbu.cloud/images/${cartItems[0]?.photos[0]?.url}`}
              alt={cartItems[0]?.name}
              className="carousel-img"
            />
          ) : (
            <img
              src={`https://api.timbu.cloud/images/${cartItems[0]?.photos[0]?.url}`}
              alt={cartItems[0]?.name}
              className="carousel-img"
            />
          )}

          <div className="hero-content">
            <div className="cart-hero-detail">
              <p>
                <span className="shoe-name">Loafers</span> <br />
                <span className="shoe-category">Men's</span>
              </p>

              <p className="shoe-price">$164.99</p>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Hero;
