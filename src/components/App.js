import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isOn, setIsOn] = useState(false);
  const appClass = isOn ? "App dark" : "App light";
  function handleChangeColor() {
    setIsOn((isOn) => !isOn);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleChangeColor} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
