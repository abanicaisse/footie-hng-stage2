import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./showcase.css";
import { productShoeVert } from "../../assets";
import { shoeProducts } from "../../data/products";
import Product from "../Product/Product";

const Showcase = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="showcase">
        <div className="vertical-shoe">
          <img src={productShoeVert} alt="men-loafer" />
        </div>
        <div className="mens-text">
          <h1>Men's</h1>
        </div>
        <div className="shoes-text">
          <h1>Shoes</h1>
        </div>
        <div className="showcase-shoe">
          {shoeProducts
            .filter((product) => product.Showcase)
            .map((shoe, i) => (
              <Product
                key={i}
                img={shoe.img}
                name={shoe.name}
                category={shoe.category}
                price={shoe.price}
              />
            ))}
        </div>
        {/* Mobile slider */}
        <Slider {...settings} className="showcase-slider">
          {shoeProducts
            .filter((product) => !product.vertical)
            .map((shoe, i) => (
              <Product
                key={i}
                img={shoe.img}
                name={shoe.name}
                category={shoe.category}
                price={shoe.price}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Showcase;
