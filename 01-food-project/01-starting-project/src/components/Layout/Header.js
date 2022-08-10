import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton setIsClicked={props.setIsClicked} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="food order" />
      </div>
    </Fragment>
  );
};

export default Header;
