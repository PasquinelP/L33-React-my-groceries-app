import React, { Component } from "react";
import Header from './components/Header';
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";
import Footer from './components/Footer';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Melk" },
        { id: 2, title: "Brood" },
        { id: 3, title: "Rijst" },
      ],
      shoppingListItems: [],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleClickAddGrocery = this.handleClickAddGrocery.bind(this);
    this.addAmountToItem = this.addAmountToItem.bind(this);
  }

  // check if item is already in shoppingList
  // if so, on clicking same grocery item again will not add it again to he list
  // but will increment the count of amount of the item in shopping list
  addAmountToItem(title) {
    const currentShoppingList = [...this.state.shoppingListItems];
    const newShoppingList = currentShoppingList.map((item) => {
      if (item.title === title) {
        item.amount++;
      }
      return item;
    });
    this.setState({ shoppingListItems: newShoppingList });
  }

  // check if item in grocery list is clicked
  // check if clicked item allready exists in shopping list
  // if not, add clicked item to shopping list
  // if it is, call addAmountToItem to only increment the amount of the item in shopping list
  handleClickGroceryItem(title) {
    const shoppingListItems = [...this.state.shoppingListItems];
    const shoppingListItem = shoppingListItems.filter(
      (item) => item.title === title
    );

    if (shoppingListItem.length === 0) {
      this.setState((prevState) => {
        const newShoppingList = prevState.shoppingListItems;
        newShoppingList.push({
          id: newShoppingList.length + 1,
          title: title,
          amount: 1,
        });
        return {
          shoppingListItems: newShoppingList,
        };
      });
    } else {
      this.addAmountToItem(title);
    }
  }

  // setState of shoppingListItems to empty array to clear list
  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  // get value of item entered in input
  // add the new item to grocery items list
  // prevent page to reload on submitting form with preventDefault();
  handleClickAddGrocery(event, title) {
    event.preventDefault();
    if (title !== undefined && title !== null && title.length > 0) {
      this.setState((prevState) => {
        const groceryItems = [...prevState.groceryItems];
        groceryItems.push({
          id: groceryItems.length + 1,
          title: title,
        });
        return {
          groceryItems: groceryItems,
        };
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <GroceryList
            groceryItems={this.state.groceryItems}
            clickItem={this.handleClickGroceryItem}
            addGrocery={this.handleClickAddGrocery}
          />
          <ShoppingCart
            shoppingListItems={this.state.shoppingListItems}
            emptyCart={this.emptyCart}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Container;
