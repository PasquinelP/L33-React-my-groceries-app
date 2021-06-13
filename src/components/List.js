import React from "react";
import ListItem from './ListItem'
import useApp from "./useApp";

const List = (props) => {

  const {handleClickGroceryItem} = useApp();

  // go through the list to construct a listitem for ech item in the groceryItems array
    const listItem = props.items.map((item) => (
      <ListItem
        key={item.id}
        item={item}
        click={handleClickGroceryItem}
        readonly={props.readonly}
      />
    ));
    return (
      <ul className="list">
        {listItem}
      </ul>
    );
}

export default List;
