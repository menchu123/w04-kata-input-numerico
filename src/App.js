import "./App.css";
import Input from "./components/Input/Input.js";
import Button from "./components/Button/Button.js";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("0");

  function plus() {
    if (number < 10) {
      setNumber(Number(number) + 1);
    }
  }

  function minus() {
    if (number > 0) {
      setNumber(Number(number) - 1);
    }
  }

  return (
    <div className="App">
      <Button actionOnClick={minus} text="-" />
      <Input number={number} />
      <Button actionOnClick={plus} text="+" />
    </div>
  );
}

export default App;
