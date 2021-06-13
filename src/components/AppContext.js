import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {

  const [groceryItems, setGroceryItems] = useState([
      { id: 1, title: "Melk" },
      { id: 2, title: "Brood" },
      { id: 3, title: "Rijst" },
    ]);

  const [shoppingListItems, setShoppingListItems] = useState([]);

  return(
    <AppContext.Provider value={{groceryItems, setGroceryItems, shoppingListItems, setShoppingListItems}}>
      {props.children}
    </AppContext.Provider>

  );
}