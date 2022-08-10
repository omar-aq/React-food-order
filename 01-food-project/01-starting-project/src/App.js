import React, { useState } from "react";
//components
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Card/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <CartProvider>
      {isClicked && <Cart setIsClicked={setIsClicked} />}
      <Header setIsClicked={setIsClicked} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
