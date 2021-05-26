import React, {Component} from "react";
import ListItem from './ListItem'

class List extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <ul>
        <ListItem title="Melk" />
        <ListItem title="Brood" />
        <ListItem title="Rijst" />
      </ul>
    );}
    
}

export default List;
