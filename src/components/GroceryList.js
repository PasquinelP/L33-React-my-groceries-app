import React from "react";
import List from "./List";

const GroceryList = (props) => {

    return (
      <div>
        <List
          items={props.groceryItems}
          click={props.clickItem}
        />
      </div>
    );
}

export default GroceryList;
