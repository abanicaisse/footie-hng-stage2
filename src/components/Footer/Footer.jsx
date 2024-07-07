import React from "react";

import "./footer.css";
import {
  searchIconBlack,
  searchIconEmpty,
  searchIconFilled,
} from "../../assets";

const Footer = () => {
  return (
    <footer>
      <div className="max-screen-width">
        <div>
          <div className="footer-links">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Bag</a>
          </div>
          <div className="search">
            <input type="search" placeholder="Search" />
            <label htmlFor="search">
              <img src={searchIconBlack} alt="search" />
            </label>
          </div>
        </div>
        <h1>Footsie</h1>
      </div>
    </footer>
  );
};

export default Footer;
