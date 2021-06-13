import React from "react";
import Header from './components/Header';
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";
import Footer from './components/Footer';

const Container = () => {

  return (
    <div className="container">
      <Header />
      <main>
        <GroceryList />
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}

export default Container;
