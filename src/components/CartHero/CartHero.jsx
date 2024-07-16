import React from "react";

import { Circles } from "react-loader-spinner";

import {
  arrowRightWhite,
  searchIconEmpty,
  shoe1,
  shoe2,
  shoe2Mobile,
} from "../../assets";

import "./cart-hero.css";

const Hero = ({
  windowWidth,
  allProducts,
  isLoadingData,
  setIsLoadingData,
}) => {
  !allProducts && setIsLoadingData(true);

  const cartItems = [allProducts[17], allProducts[18], allProducts[19]];

  return (
    <>
      {isLoadingData && (
        <div className="loader">
          <Circles
            height="80"
            width="80"
            color="#f97e2f"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {!isLoadingData && allProducts && (
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
        </section>
      )}
    </>
  );
};

export default Hero;
