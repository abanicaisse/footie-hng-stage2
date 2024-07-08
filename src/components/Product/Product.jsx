import React from "react";

import { arrowRightOrange, arrowRightWhite, productShoe1 } from "../../assets";

import "./product.css";
import { Link } from "react-router-dom";

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
        <p className="shoe-price">${price}</p>
      </div>

      <Link to={"/cart"} className="product-add-to-bag">
        <span>Add to bag</span>
        <img src={arrowRightOrange} alt="explore" />
      </Link>
    </div>
  );
};

export default Product;
