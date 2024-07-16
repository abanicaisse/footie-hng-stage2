import { React, useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home, Checkout, Cart } from "./pages";

import axios from "axios";
import "./App.css";

const API_KEY = import.meta.env.VITE_TIMBU_API_KEY;
const APP_ID = import.meta.env.VITE_TIMBU_APP_ID;
const ORG_ID = import.meta.env.VITE_TIMBU_ORG_ID;

const baseURL = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const [allProducts, setAllProducts] = useState([]);

  // Fetching All Products from API
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(baseURL).then((data) => {
          setAllProducts(data?.data.items);
          setIsLoadingData(false);
        });
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  // Handle Window Resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              windowWidth={windowWidth}
              setWindowWidth={setWindowWidth}
              allProducts={allProducts}
              setallProducts={setAllProducts}
              isLoadingData={isLoadingData}
              setIsLoadingData={setIsLoadingData}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              windowWidth={windowWidth}
              setWindowWidth={setWindowWidth}
              allProducts={allProducts}
              setallProducts={setAllProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              windowWidth={windowWidth}
              setWindowWidth={setWindowWidth}
              allProducts={allProducts}
              setallProducts={setAllProducts}
              isLoadingData={isLoadingData}
              setIsLoadingData={setIsLoadingData}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
