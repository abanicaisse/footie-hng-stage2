import React from "react";

import "./showcase.css";
import { productShoeVert } from "../../assets";
import { shoeProducts } from "../../data/products";
import Product from "../Product/Product";

const Showcase = () => {
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
        <div className="showcase-slider">
          {/* <p>Mobile slider</p> */}
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
        </div>
      </div>
    </section>
  );
};

export default Showcase;
