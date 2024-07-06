import { React, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home, Checkout, Cart } from "./pages";

import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
