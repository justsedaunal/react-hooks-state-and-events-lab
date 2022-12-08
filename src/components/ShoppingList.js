import React, { useEffect, useMemo, useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items);
  const [list, setList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setList(items);
  }, []);

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return list;
    }
    return list.filter((item) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, list]);
  console.log(filteredList);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <Filter handleCategoryChange={handleCategoryChange} />
      {/* <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div> */}
      <ul className="Items">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
