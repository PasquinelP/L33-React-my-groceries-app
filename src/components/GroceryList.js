import React from "react";
import InputField from "./InputField";
import List from "./List";

const GroceryList = (props) => {

    return (
      <div>
        <h2>Boodschappenlijst</h2>
        <InputField onSubmit={props.addGrocery} />
        <List
          items={props.groceryItems}
          click={props.clickItem}
        />
      </div>
    );
}

export default GroceryList;
