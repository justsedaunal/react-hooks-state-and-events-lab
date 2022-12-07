import React, { useState } from "react";

function Item({ name, category }) {
  const [buttonText, setButtonText] = useState("Add to Cart");

  function handleClick() {
    if (buttonText == "Add to Cart") {
      setButtonText("Remove to cart");
    } else {
      setButtonText("Add to Cart");
    }
  }

  const appClass = buttonText === "Add to Cart" ? "add" : "remove";

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={appClass}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
