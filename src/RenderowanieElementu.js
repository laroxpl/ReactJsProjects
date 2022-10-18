import logo from "./logo.svg";
import "./App.css";

function RenderowanieElementu() {
  let imie = "bob"; // zmienna "bob" const element ={" "}
  return (
    <div>
      <h1>
        Witaj, {imie} masz {2 + 2} lat!
      </h1>
    </div>
  );
}

export default RenderowanieElementu;
