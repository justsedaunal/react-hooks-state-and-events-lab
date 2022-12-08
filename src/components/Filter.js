import React from "react";

function Filter(props) {
  console.log(props);
  return (
    <div className="Filter">
      <select name="filter" onChange={(e) => props.handleCategoryChange(e)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
