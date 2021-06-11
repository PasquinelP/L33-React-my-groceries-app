import React, { useState } from "react";
import Header from './components/Header';
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";
import Footer from './components/Footer';

const Container = () => {

  const [groceryItems, setGroceryItems] = useState([
        { id: 1, title: "Melk" },
        { id: 2, title: "Brood" },
        { id: 3, title: "Rijst" },
      ]);

  const [shoppingListItems, setShoppingListItems] = useState([]);

  // check if item is already in shoppingList
  // if so, on clicking same grocery item again will not add it again to he list
  // but will increment the count of amount of the item in shopping list
  const addAmountToItem = (title) => {
    const newShoppingListItem = shoppingListItems.map((item) => {
      if (item.title === title) {
        item.amount++;
      }
      return item;
    });
    setShoppingListItems(newShoppingListItem);
  }

  // check if item in grocery list is clicked
  // check if clicked item allready exists in shopping list
  // if not, add clicked item to shopping list
  // if it is, call addAmountToItem to only increment the amount of the item in shopping list
  const handleClickGroceryItem = (title) => {
    const shoppingListItem = shoppingListItems.filter(
      (item) => item.title === title
    );

    if (shoppingListItem.length === 0) {
      const newShoppingItem = {
        id: shoppingListItems.length + 1,
        title: title,
        amount: 1,
      };
      setShoppingListItems(prevShoppingListItems => [...prevShoppingListItems, newShoppingItem])
    } else {
      addAmountToItem(title);
    }
  }

  // setState of shoppingListItems to empty array to clear list
  const emptyCart = () => {
    setShoppingListItems([]);
  }

  // get value of item entered in input
  // add the new item to grocery items list
  // prevent page to reload on submitting form with preventDefault();
  const handleClickAddGrocery = (event, title) => {
    event.preventDefault();
    if (title !== undefined && title !== null && title.length > 0) {
      const newItem = {
        id: groceryItems.length + 1,
        title: title,
      };
      setGroceryItems(prevGroceryItems => [...prevGroceryItems, newItem])
    }
  }

  return (
    <div className="container">
      <Header />
      <main>
        <GroceryList
          groceryItems={groceryItems}
          clickItem={handleClickGroceryItem}
          addGrocery={handleClickAddGrocery}
        />
        <ShoppingCart
          shoppingListItems={shoppingListItems}
          emptyCart={emptyCart}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Container;
