import { React, useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home, Checkout, Cart } from "./pages";

import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
            <Home windowWidth={windowWidth} setWindowWidth={setWindowWidth} />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              windowWidth={windowWidth}
              setWindowWidth={setWindowWidth}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart windowWidth={windowWidth} setWindowWidth={setWindowWidth} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
