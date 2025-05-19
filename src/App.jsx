import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Item from "./Components/Item/Item";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="women" />}
          ></Route>
          <Route path="/kids" element={<ShopCategory category="kid" />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path=":productId" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>

      <Item />
    </div>
  );
};

export default App;
