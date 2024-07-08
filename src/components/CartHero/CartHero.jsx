import React from "react";

import {
  arrowRightWhite,
  searchIconEmpty,
  shoe1,
  shoe2,
  shoe2Mobile,
} from "../../assets";

import "./cart-hero.css";

const Hero = ({ windowWidth, setWindowWidth }) => {
  return (
    <>
      <section className="hero-section ">
        <div className="max-screen-width hero-container cart-hero">
          {windowWidth < 800 ? (
            <img src={shoe2Mobile} alt="Shoe 1" className="carousel-img" />
          ) : (
            <img src={shoe2} alt="Shoe 2" className="carousel-img" />
          )}

          <div className="hero-content">
            <h1 id="footsie">Footsie</h1>

            <div className="cart-hero-detail">
              <p>
                <span className="shoe-name">Loafers</span> <br />
                <span className="shoe-category">Men's</span>
              </p>

              <p className="shoe-price">$164.99</p>
            </div>

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
      </section>{" "}
    </>
    // <div
    //   onMouseOver={() => {
    //     const footsie = document.getElementById("footsie");
    //     footsie.style.opacity = 1;
    //     // console.log(footsie);
    //     console.log("mouseover");
    //   }}
    //   onMouseOut={() => {
    //     const footsie = document.getElementById("footsie");
    //     footsie.style.opacity = 0.1;
    //     console.log("mouseout");
    //   }}
    // >
    //   <section className="hero-section">
    //     <img src={shoe1} alt="Shoe 1" className="carousel-img" />
    //     <div className="max-screen-width hero-content">
    //       <h1 id="footsie">Footsie</h1>
    //       <p>
    //         Through our collections we blur the borders between high fashion and
    //         high performance. Like our sneakers by Stella McCartney athletic
    //         clothing collection – designed to look the part inside and outside
    //         of the gym. Or some of our adidas Originals lifestyle pieces, that
    //         can be worn as sports apparel too.
    //       </p>
    //       <div className="explore">
    //         <div>
    //           <a href="#">Explore</a>
    //           <img src={arrowRightWhite} alt="explore" />
    //         </div>
    //         <div className="search">
    //           <input type="search" placeholder="Search" />
    //           <label htmlFor="search">
    //             <img src={searchIconEmpty} alt="search" />
    //           </label>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Hero;
