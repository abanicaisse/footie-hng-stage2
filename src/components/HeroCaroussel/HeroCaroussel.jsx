import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCube } from "swiper/modules";

import "./hero-caroussel.css";
import { arrowRightWhite, searchIconEmpty } from "../../assets";
// import { carouselShoes } from "../../data/products";

const HeroCaroussel = ({ windowWidth, carouselShoes }) => {
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
      {!carouselShoes ? (
        <></>
      ) : (
        carouselShoes?.map((shoe, i) => (
          <SwiperSlide key={shoe?.unique_id} className="hero-container">
            {windowWidth < 800 ? (
              <img
                src={`https://api.timbu.cloud/images/${shoe?.photos[0]?.url}`}
                alt={shoe?.name}
                className="carousel-img"
              />
            ) : (
              <img
                src={`https://api.timbu.cloud/images/${shoe?.photos[0]?.url}`}
                alt={shoe?.name}
                className="carousel-img"
              />
            )}
            <div className="hero-content">
              <h1 id="footsie">Footsie</h1>
              {windowWidth < 800 ? (
                <p>{shoe?.description}</p>
              ) : (
                <p>{shoe?.description}</p>
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
        ))
      )}
    </Swiper>
  );
};

export default HeroCaroussel;
