import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import { Home } from "./components/pages/Home";
import NewPage from "./components/pages/NewPage";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newPage" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
