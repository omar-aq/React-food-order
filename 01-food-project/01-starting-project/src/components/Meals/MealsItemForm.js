import React from "react";

import classes from "./MealItemForm.module.css";
//components
import Input from "./Input";

const MealsItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;
