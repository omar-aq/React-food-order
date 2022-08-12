import { useContext } from "react";
import classes from "./MealItem.module.css";
//components
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { name, description, price } = props.meal;
  const mealPrice = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h1>{name}</h1>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
