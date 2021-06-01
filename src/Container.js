import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Melk" },
        { id: 2, title: "Brood" },
        { id: 3, title: "Rijst" },
      ],
      shoppingListItems: [
        { id: 1, title: "Shop test 1" },
        { id: 2, title: "Shop test 2" },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
  }

   handleClickGroceryItem(title) {
    console.log("Clicked", title)
  }

  render() {
    return (
      <div>
        <GroceryList
          groceryItems={this.state.groceryItems}
          handleClickGroceryItem={this.handleClickGroceryItem}
        />
        <ShoppingCart shoppingListItems={this.state.shoppingListItems} />
      </div>
    );
  }
}

export default Container;
