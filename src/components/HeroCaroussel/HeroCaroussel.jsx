import React, { useRef, useState } from "react";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCube } from "swiper/modules";

import "./hero-caroussel.css";
import {
  arrowRightWhite,
  searchIconEmpty,
  shoe1,
  shoe2,
  shoe2Mobile,
} from "../../assets";
import { carouselShoes } from "../../data/products";

const HeroCaroussel = ({ windowWidth, setWindowWidth }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[Autoplay, EffectCube]}
      className="hero-section mySwiper"
    >
      {carouselShoes.map((shoeSlide, i) => (
        <SwiperSlide key={i} className="hero-container">
          {windowWidth < 800 ? (
            <img
              src={shoeSlide.mobileImg}
              alt="Shoe 1"
              className="carousel-img"
            />
          ) : (
            <img
              src={shoeSlide.desktopImg}
              alt="Shoe 2"
              className="carousel-img"
            />
          )}
          <div className="hero-content">
            <h1 id="footsie">{shoeSlide.header}</h1>
            {windowWidth < 800 ? (
              <p>{shoeSlide.mobileText}</p>
            ) : (
              <p>{shoeSlide.desktopText}</p>
            )}

            <div className="explore">
              <div>
                <a href="#">Explore</a>
                <img src={arrowRightWhite} alt="explore" />
              </div>
              <div className="search">
                <input type="search" placeholder="Search" />
                <label htmlFor="search">
                  <img src={searchIconEmpty} alt="search" />
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCaroussel;

{
  /* <section className="hero-section">
<div className="max-screen-width hero-container">
  {windowWidth < 800 ? (
    <img src={shoe2Mobile} alt="Shoe 1" className="carousel-img" />
  ) : (
    <img src={shoe2} alt="Shoe 2" className="carousel-img" />
  )}

  <div className="hero-content">
    <h1 id="footsie">Footsie</h1>
    {windowWidth < 800 ? (
      <p>
        Through our collections we blur the borders between high fashion
        and high performance. Like our sneakers by Stella McCartney
        athletic clothing collection
      </p>
    ) : (
      <p>
        Through our collections we blur the borders between high fashion
        and high performance. Like our sneakers by Stella McCartney
        athletic clothing collection – designed to look the part inside
        and outside of the gym. Or some of our adidas Originals lifestyle
        pieces, that can be worn as sports apparel too.
      </p>
    )}

    <div className="explore">
      <div>
        <a href="#">Explore</a>
        <img src={arrowRightWhite} alt="explore" />
      </div>
      <div className="search">
        <input type="search" placeholder="Search" />
        <label htmlFor="search">
          <img src={searchIconEmpty} alt="search" />
        </label>
      </div>
    </div>
  </div>
</div>
</section> */
}
