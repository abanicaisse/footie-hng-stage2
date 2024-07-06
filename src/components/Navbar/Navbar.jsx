import React, { useState, useEffect } from "react";

import {
  logo,
  menuIcon,
  cartIconEmpty,
  cartIconFilled,
  searchIconEmpty,
} from "../../assets";

import "./navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    const navLinks = document.getElementById("nav-links");
    console.log(navLinks);
    if (navLinks.style.display === "none") {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
    }
  };

  // style={{ position: "relative" }}

  return (
    <header>
      <nav className="max-screen-width">
        {windowWidth < 800 ? (
          <>
            <img
              src={menuIcon}
              alt="menu"
              className="menu"
              onClick={toggleMenu}
            />
            <div id="nav-links" className="nav-links">
              <p>Men</p>
              <p>Women</p>
              <p>Kids</p>
            </div>
          </>
        ) : (
          <img src={logo} alt="logo" className="logo" />
        )}

        {windowWidth < 800 ? (
          <></>
        ) : (
          <div className="nav-links">
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
          </div>
        )}

        <div className="cart">
          {windowWidth < 800 ? (
            <>
              <img src={searchIconEmpty} alt="" />
              <img src={cartIconEmpty} alt="" />
            </>
          ) : (
            <>
              <p>Your Bag</p>
              <img src={cartIconEmpty} alt="" />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
