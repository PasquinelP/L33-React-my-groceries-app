import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  
    return (
      <div>
        <button onClick={props.emptyCart}>
          Leeg de winkelmand
        </button>
        <List items={props.shoppingListItems} />
      </div>
    );
}

export default ShoppingCart;
