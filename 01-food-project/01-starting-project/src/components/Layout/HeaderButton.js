import React from "react";
import classes from "./HeaderButton.module.css";
import CardIcon from "../Card/CardIcon";

const HeaderButton = () => {
  return (
    <>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CardIcon />
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>3</span>
      </button>
    </>
  );
};

export default HeaderButton;
