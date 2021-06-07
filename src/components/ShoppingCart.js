import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  
    return (
      <div className="shoppingcart">
        <header>
          <h2>Winkelmand</h2>
          <button onClick={props.emptyCart}>
            Leeg de winkelmand
          </button>
        </header>
        {/* send readonly prop to now if we are dealing with a shoppingList
        so we can conditional render the amount on the list item */}
        <List items={props.shoppingListItems} readonly={true} />
      </div>
    );
}

export default ShoppingCart;
