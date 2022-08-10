import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CardIcon from "../Card/CardIcon";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const CartHandel = () => {
    props.setIsClicked(true);
  };
  return (
    <>
      <button onClick={CartHandel} className={classes.button}>
        <span className={classes.icon}>
          <CardIcon />
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderButton;
