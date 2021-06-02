import React from 'react'

const InputField = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Vul je boodschappen in"
      />
      <button type="submit">Voeg toe</button>
    </form>
  );



}

export default InputField