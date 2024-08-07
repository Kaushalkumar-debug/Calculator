import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [input, setInput] = useState(0);
  const handleButtonClick = (value) => {
    if (value === "Ac") {
      setInput("");
    } else if (value === "()") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      setInput(eval(input).toString());
    } else {
      setInput((preValue) => preValue + value);
    }
  };
  return (
    <div className="container">
      <div className="cal">
        <h1 id="input">{input}</h1>
      </div>
      <div className="box">
        <button onClick={() => handleButtonClick("Ac")}>Ac</button>
        <button onClick={() => handleButtonClick("()")}>()</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("00")}>00</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
