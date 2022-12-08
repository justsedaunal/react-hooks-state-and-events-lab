import React, { useState } from "react";

function Header({ onDarkModeClick }) {
  console.log(onDarkModeClick);

  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </header>
  );
}

export default Header;
