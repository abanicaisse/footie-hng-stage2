import React from "react";

import { Link } from "react-router-dom";

import { productShoe1, arrowDownBlack } from "../../assets";
import "./checkout-card.css";

const CheckoutCard = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-product">
        <div className="checkout-product-img">
          <img src={productShoe1} alt="shoe -1" />
        </div>
        <div className="checkout-product-detail">
          <div className="shoe-details">
            <div className="shoe-name">
              <p>Loafers Foam X</p>
              <p>Men's</p>
            </div>

            <div className="shoe-size-qty">
              <div className="size">
                <p>
                  Size <img src={arrowDownBlack} alt="size" />
                </p>
                <p className="">42 EUR</p>
              </div>
              <div className="qty">
                <p>
                  Size <img src={arrowDownBlack} alt="size" />
                </p>
                <p className="">1 Pair</p>
              </div>
            </div>

            <div className="shoe-color-picker">
              <p className="white"></p>
              <p>White </p>
            </div>
          </div>
          <p className="checkout-product-price">$164.99</p>
        </div>
      </div>

      <div className="total-section">
        <div>
          <p>Subtotal</p>
          <p>$164.99</p>
        </div>
        <div>
          <p>Devlivery Fee</p>
          <p>$80</p>
        </div>
        <div>
          <p>Total</p>
          <p>
            <span>$244.99</span>
          </p>
        </div>
      </div>

      <div className="payment">
        <div>
          <h1>
            Payment Method/ <br />
            delivry route
          </h1>
          <div>
            <p>Card</p>
            <p>Paypal</p>
          </div>
        </div>

        <form action="">
          <input
            type="text"
            placeholder="Cardholder name"
            id="name"
            className="name"
          />
          <input
            type="text"
            placeholder="Card Number"
            id="card-num"
            className="card-num"
          />
          <div>
            <input
              type="text"
              placeholder="Expiration Date"
              id="exp-date"
              className="exp-date"
            />
            <input
              type="text"
              placeholder="CVV Number"
              id="cvv"
              className="cvv"
            />
          </div>
          <input
            type="text"
            placeholder="House Address"
            id="address"
            className="address"
          />
        </form>

        <button type="submit">Place order</button>
      </div>
      <Link to={"/"}>Browse more shoes</Link>
    </div>
  );
};

export default CheckoutCard;
