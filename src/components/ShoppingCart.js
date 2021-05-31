import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  
    return (
      <div>
        <List items={props.shoppingListItems} />
      </div>
    );
}

export default ShoppingCart;
