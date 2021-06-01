import React from "react";
import List from "./List";

const GroceryList = (props) => {

    return (
      <div>
        <List
          items={props.groceryItems}
          handleClickGroceryItem={props.handleClickGroceryItem}
        />
      </div>
    );
}

export default GroceryList;
