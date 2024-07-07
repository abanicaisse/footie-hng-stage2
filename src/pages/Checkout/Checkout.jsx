import React from "react";

import "./checkout.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar, Footer, CheckoutCard } from "../../components";
import { productShoe1, arrowDownBlack } from "../../assets";

const Checkout = () => {
  return (
    <section className="checkout-section">
      <Navbar />
      <div className="max-screen-width checkout">
        <h1 className="">Checkout</h1>
        <CheckoutCard />
      </div>
      <Footer />
    </section>
  );
};

export default Checkout;

// const Checkout = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

{
  /* <div className="slider-section">
      <div>
        <Slider {...settings}>
          {data.map((product, i) => (
            <div className="card">
              <div>
                <img src={product.img} alt="" />
              </div>
              <div>
                <p>{product.name}</p>
                <p>{product.reviw}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

const data = [
  {
    name: "Product 1",
    img: productShoe1,
    reviw:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, voluptate.",
  },
  {
    name: "Product 1",
    img: productShoe2,
    reviw:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, voluptate.",
  },
  {
    name: "Product 1",
    img: productShoe3,
    reviw:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, voluptate.",
  },
  {
    name: "Product 1",
    img: productShoe4,
    reviw:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, voluptate.",
  },
  {
    name: "Product 1",
    img: productShoe5,
    reviw:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, voluptate.",
  },
]; */
}
