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
      shoppingListItems: [
        { id: 1, title: "Shop test 1", amount: 1 },
        { id: 2, title: "Shop test 2", amount: 1 },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleClickAddGrocery = this.handleClickAddGrocery.bind(this);
    this.addAmountToItem = this.addAmountToItem.bind(this);
  }

addAmountToItem(title) {
    const currentShoppingList = [...this.state.shoppingListItems];
      const newShoppingList = currentShoppingList.map(item => {
        if (item.title === title) {
          item.amount++;
        }
        return item;
      });
      this.setState({ shoppingListItems: newShoppingList });
  };

  handleClickGroceryItem(title) {
    console.log("Deze is geklikt: ", title);
    this.setState((prevState) => {
      const shoppingListItems = [...prevState.shoppingListItems];
      const shoppingListItem = shoppingListItems.filter(
        (item) => item.title === title
      );
      console.log("Shoppinglistitem is: ", shoppingListItem);
      
        if (shoppingListItem.length === 0) {
        shoppingListItems.push({
          id: shoppingListItems.length + 1,
          title: title,
          amount: 1,
        });
      } else {
        this.addAmountToItem(title)
      }
      console.log(shoppingListItems);
      return {
        shoppingListItems: shoppingListItems,
      };
    });
  }

  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  handleClickAddGrocery(event) {
    event.preventDefault();
    const title = event.target.title.value;
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
