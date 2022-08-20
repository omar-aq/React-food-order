import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newItem = state.items.concat(action.item);
    const newTotalAmount = state.totalAmount + 1;
    // state.totalAmount + action.item.price * action.item.amount;
    return {
      items: newItem,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    data: [
      {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
      },
      {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
      },
      {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
      },
      {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
      },
    ],
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
