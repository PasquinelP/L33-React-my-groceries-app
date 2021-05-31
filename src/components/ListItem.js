import React from 'react'

function ListItem(props) {
  return (
    <li key={props.item.id} value={props.item.title}>{props.item.title}</li>
  )
}

export default ListItem
