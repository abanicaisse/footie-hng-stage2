import React from "react";

import { arrowRightWhite, searchIconEmpty, shoe1 } from "../../assets";

import "./hero.css";

const Hero = () => {
  return (
    <div
      onMouseOver={() => {
        const footsie = document.getElementById("footsie");
        footsie.style.opacity = 1;
        // console.log(footsie);
        console.log("mouseover");
      }}
      onMouseOut={() => {
        const footsie = document.getElementById("footsie");
        footsie.style.opacity = 0.1;
        console.log("mouseout");
      }}
    >
      <section className="hero-section">
        <img src={shoe1} alt="Shoe 1" className="carousel-img" />
        <div className="max-screen-width hero-content">
          <h1 id="footsie">Footsie</h1>
          <p>
            Through our collections we blur the borders between high fashion and
            high performance. Like our sneakers by Stella McCartney athletic
            clothing collection – designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sports apparel too.
          </p>
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
      </section>
    </div>
  );
};

export default Hero;
