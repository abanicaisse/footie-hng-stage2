import React from "react";

import { Link } from "react-router-dom";

import "./cart-item.css";
import { arrowDownBlack, arrowRightBlack } from "../../assets";
const CartItem = () => {
  return (
    <>
      <section>
        <div className="max-screen-width cart-item">
          {/* Cart Item - Hero - Pic presentation */}

          <div className="cart-item-desc">
            <div className="shoe-spec">
              <div className="shoe-color-picker">
                <div>
                  <p className="white"></p>
                  <p>White </p>
                </div>
                <div>
                  <p className="brown"></p>
                  <p>Brown</p>
                </div>
                <div>
                  <p className="black"></p>
                  <p>Black</p>
                </div>
              </div>
              <div className="shoe-size-qty">
                <div className="size">
                  <p>
                    Size <img src={arrowDownBlack} alt="size" />
                  </p>
                  <select name="shoe-size" id="shoe-size">
                    <option value="45">42 ER</option>
                    <option value="45">40 ER</option>
                    <option value="45">39 ER</option>
                    <option value="45">38 ER</option>
                    <option value="45">37 ER</option>
                  </select>
                </div>
                <div className="qty">
                  <p>
                    Quantity <img src={arrowDownBlack} alt="size" />
                  </p>
                  <select name="shoe-qty" id="shoe-qty">
                    <option value="1">1 Pair</option>
                    <option value="2">2 Pairs</option>
                    <option value="3">3 Pairs</option>
                    <option value="4">4 Pairs</option>
                    <option value="5">5 Pairs</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="shoe-desc">
              Through our collections we blur the borders between high fashion
              and high performance. Like our sneakers by Stella McCartney
              athletic clothing collection – designed to look the part inside
              and outside of the gym. Or some of our adidas Originals lifestyle
              pieces, that can be worn as sports apparel too.
            </p>
          </div>

          <div className="go-checkout">
            <Link to={"/checkout"}>Proceed to checkout</Link>
            <img src={arrowRightBlack} alt="go-checkout" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CartItem;
