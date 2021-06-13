import React, { useContext } from "react";
import InputField from "./InputField";
import List from "./List";
import { AppContext } from "./AppContext";

const GroceryList = () => {
  const {groceryItems} = useContext(AppContext);

    return (
      <div className="grocerylist">
        <header>
          <h2>Boodschappenlijst</h2>
          <InputField />
        </header>
        <List items={groceryItems} />
      </div>
    );
}

export default GroceryList;
