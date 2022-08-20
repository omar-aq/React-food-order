import React, { useState } from "react";

//component
import Header from "../Layout/Header";
import Meals from "../Meals/Meals";
import Cart from "../Card/Cart";

export const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {isClicked && <Cart setIsClicked={setIsClicked} />}
      <Header setIsClicked={setIsClicked} />
      <main>
        <Meals />
      </main>
    </>
  );
};
