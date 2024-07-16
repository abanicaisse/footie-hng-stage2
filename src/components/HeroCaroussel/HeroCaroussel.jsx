import React, { useRef, useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCube } from "swiper/modules";

import { Circles } from "react-loader-spinner";

import { arrowRightWhite, searchIconEmpty } from "../../assets";
// import { carouselShoes } from "../../data/products";
import "./hero-caroussel.css";

const HeroCaroussel = ({ isLoadingData, setIsLoadingData, allProducts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  !allProducts && setIsLoadingData(true);

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
          {allProducts?.slice(5, 10)?.map((shoe, i) => (
            <SwiperSlide key={shoe?.unique_id} className="hero-container">
              <img
                src={`https://api.timbu.cloud/images/${shoe?.photos[0]?.url}`}
                alt={shoe?.name}
                className="carousel-img"
              />

              <div className="hero-content">
                <h1 id="footsie">Footsie</h1>
                <p>{shoe?.description}</p>

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
      )}
    </>
  );
};

export default HeroCaroussel;
