import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import classes from "./NowPage.module.css";

const NewPage = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.data.map((cart) => cart));
  return (
    <section>
      {cartCtx.data.map((cart) => {
        return (
          <li className={classes.meal}>
            <div>
              <h1>{cart.name}</h1>
              <div className={classes.description}>{cart.description}</div>
              <div className={classes.price}>{cart.price}</div>
            </div>
          </li>
        );
      })}
    </section>
  );
};

export default NewPage;
