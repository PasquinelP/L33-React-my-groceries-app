import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  
    return (
      <div>
        <h2>Winkelmand</h2>
        <button onClick={props.emptyCart}>
          Leeg de winkelmand
        </button>
        <List items={props.shoppingListItems} />
      </div>
    );
}

export default ShoppingCart;
