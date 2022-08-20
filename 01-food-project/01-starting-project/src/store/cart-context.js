import { createContext } from "react";

const CartContext = createContext({
  items: [],
  data: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
