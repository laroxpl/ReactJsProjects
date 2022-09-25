import React from "react";

function ListaKlucz() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) =>
  <li key={numbers.toString()}>
    {number*2}
  </li>
  );
  return (
    <ul>{doubled}</ul>
  );
}
export default ListaKlucz;
