import React from "react";

import { arrowRightOrange, arrowRightWhite, productShoe1 } from "../../assets";

import "./product.css";

const Product = ({ img, name, price, category }) => {
  // onMouseOver={() => {
  //   document.querySelectorAll(
  //     ".product-add-to-bag"
  //   ).style.backgroundColor = "#f97e2f";
  //   document.querySelector(".product-add-to-bag > a").style.color =
  //     "#fff";
  //   document
  //     .querySelector(".product-add-to-bag > img")
  //     .setAttribute("src", arrowRightWhite);
  // }}
  // onMouseOut={() => {
  //   document.querySelector(".product-add-to-bag").style.backgroundColor =
  //     "transparent";
  //   document.querySelector(".product-add-to-bag > a").style.color =
  //     "#f97e2f";
  //   document
  //     .querySelector(".product-add-to-bag > img")
  //     .setAttribute("src", arrowRightOrange);
  // }}

  return (
    <div className="shoe-card">
      <img src={img} alt={name} />
      <div>
        <p className="shoe-name">{name}</p>
        <p className="shoe-category">{category}</p>
        <p className="shoe-price">{price}</p>
      </div>

      <div className="product-add-to-bag">
        <a href="#">Add to bag</a>
        <img src={arrowRightOrange} alt="explore" />
      </div>
    </div>
    // <div className="shoe-card">
    //   <img src={productShoe1} alt={name} />
    //   <div>
    //     <p className="shoe-name">Loafer</p>
    //     <p className="shoe-category">Men's</p>
    //     <p className="shoe-price">$164.99</p>
    //   </div>

    // </div>
  );
};

export default Product;
