import React from "react";
import classes from "./MealItem.module.css";
//components
import MealsItemForm from "./MealsItemForm";

const MealItem = (props) => {
  const { name, description, price } = props.meal;
  const mealPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h1>{name}</h1>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
};

export default MealItem;
