import React, { useState } from "react";
import ListInput from "./ListInput";

function ListDisplay() {
  const [list, setList] = useState([]);
  const displayList = (item) => {
    setList(item.target.value);
  };

  return (
    <form>
      <label>
      <ListInput handleChange={setList} />
        <select onChange={displayList}>
          <option></option>
        </select>
      </label>
    </form>
  );
}
export default ListDisplay;
