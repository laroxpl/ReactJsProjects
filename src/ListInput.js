import logo from "./logo.svg";
import "./App.css";
import FormFlavor from "./FormFlavor";
import FormBox from "./FormBox";
import PrzekazywanieDanychKalkulator from "./PrzekazywanieDanychKalkulator";
import HooksBasic from "./HooksBasic";
import { useState } from "react";

function ListInput() {
  const [list, setList] = useState([]);
  const listItem=["wybierz opcje", "sztuczne", "male", "duze"];
  const handleChange =(e)=>{
    setList(list.concat(e.target.value));
    
  };
  console.log(list);

  const listOption = listItem.map((item,index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <form>
      <label>
        czesc:
        <select value="" onChange={handleChange}>
          {listOption}
        </select>
      </label>
    </form>
  );
}
export default ListInput;
