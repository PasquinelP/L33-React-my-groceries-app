import React from "react";
import List from "./List";
import useApp from "./useApp";

const ShoppingCart = () => {
  const { emptyCart, shoppingListItems } = useApp();

    return (
      <div className="shoppingcart">
        <header>
          <h2>Winkelmand</h2>
          <button onClick={emptyCart}>
            Leeg de winkelmand
          </button>
        </header>
        {/* send readonly prop to now if we are dealing with a shoppingList
        so we can conditional render the amount on the list item */}
        <List items={shoppingListItems} readonly={true} />
      </div>
    );
}

export default ShoppingCart;
