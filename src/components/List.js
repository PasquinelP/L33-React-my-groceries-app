import React, {Component} from "react";
import ListItem from './ListItem'

class List extends Component {
  constructor() {
    super()
    this.state = {
      groceryItems: [
          { id: 1, title: "Melk" },
          { id: 2, title: "Brood" },
          { id: 3, title: "Rijst"}
      ]
    }
  }

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
