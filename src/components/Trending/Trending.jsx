import React from "react";

import { Circles } from "react-loader-spinner";

import "./trending.css";
import { arrowDown } from "../../assets";
import { Product } from "../";
import { shoeProducts } from "../../data/products";

const Trending = ({
  header,
  paragraph,
  orangeText,
  icon,
  allProducts,
  isLoadingData,
  setIsLoadingData,
}) => {
  // !allProducts && setIsLoadingData(true);

  return (
    <>
      {isLoadingData && (
        <div className="section-loader">
          <Circles
            height="80"
            width="80"
            color="#f97e2f"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}

      {!isLoadingData && allProducts && (
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
              {allProducts?.slice(18, 21)?.map((shoe, i) => (
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
      )}
    </>
  );
};

export default Trending;
