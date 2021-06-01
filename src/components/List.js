import React, {Component} from "react";
import ListItem from './ListItem'

class List extends Component {

  render() {
    const listItem = this.props.items.map((item) => (
      <ListItem
        key={item.id}
        item={item}
        handleClickGroceryItem={this.props.handleClickGroceryItem}
      />
    ));
    return (
      <ul>
        {listItem}
      </ul>
    );}
    
}

export default List;
