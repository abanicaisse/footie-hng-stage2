import React from "react";

import "./trending.css";
import { arrowDown } from "../../assets";
import { Product } from "../";
import { shoeProducts } from "../../data/products";

const Trending = ({ header, paragraph, orangeText, icon, trendingShoes }) => {
  return (
    <section>
      <div className="max-screen-width trending">
        <div className="trending-header">
          <div>
            <h1>{header}</h1>
            <p>
              Discover the perfect blend of timeless style, quality, and
              performance. Shop fotsie shoes, sneakers and gear.
            </p>
          </div>
          <div className="sort-by">
            <p>{orangeText}</p>
            <p>
              <img src={icon} alt="" />
            </p>
          </div>
        </div>

        <div className="trending-products">
          {trendingShoes?.map((shoe, i) => (
            <Product
              key={shoe?.unique_id}
              img={`https://api.timbu.cloud/images/${shoe?.photos[0]?.url}`}
              name={shoe?.name}
              price={shoe?.current_price[0]?.USD[0]}
              category="Men"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
