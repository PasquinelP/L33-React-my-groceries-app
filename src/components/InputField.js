import React, { useState }  from 'react';
import useApp from "./useApp";

const InputField = (props) => {

  const { handleClickAddGrocery } = useApp();

  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    // make sure to setTitle to empty title to clear input field after submit
    <form
      onSubmit={(e) => {
        handleClickAddGrocery(e, title);
        setTitle("");
      }}
    >
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Vul je boodschappen in"
      />
      <button type="submit">Voeg toe</button>
    </form>
  );
}

export default InputField