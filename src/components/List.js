import React, {Component} from "react";
import ListItem from './ListItem'

class List extends Component {


  render() {
    const listItem = this.state.groceryItems.map((groceryItem) => (
      <ListItem key={groceryItem.id} item={groceryItem} />
    ))
    return (
      <ul>
        {listItem}
      </ul>
    );}
    
}

export default List;
