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
        { id: 1, title: "Shop test 1", amount: 1 },
        { id: 2, title: "Shop test 2", amount: 1 },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleClickAddGrocery = this.handleClickAddGrocery.bind(this);
  }

  handleClickGroceryItem(title) {
    console.log("Deze is geklikt: ", title);
    this.setState((prevState) => {
      const shoppingListItems = [...prevState.shoppingListItems];
      shoppingListItems.push({
        id: shoppingListItems.length + 1,
        title: title,
        amount: 1,
      });
      console.log(shoppingListItems);
      return {
        shoppingListItems: shoppingListItems,
      };
    });
  }

  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  handleClickAddGrocery(title) {
    console.log("Form was submitted")
    // this.setState((prevState) => {
    //   const groceryItems = [...prevState.groceryItems]
    //   groceryItems.push({
    //     id: groceryItems.length + 1,
    //     title: title,
    //   })
    //   return {
    //     groceryItems: groceryItems
    //   }
    // })
  }

  render() {
    return (
      <div>
        <GroceryList
          groceryItems={this.state.groceryItems}
          clickItem={this.handleClickGroceryItem}
          addGrocery={this.handleClickAddGrocery}
        />
        <ShoppingCart
          shoppingListItems={this.state.shoppingListItems}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
