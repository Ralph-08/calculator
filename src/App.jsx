import "./styles/App.scss";
import NumberButtton from "./components/NumberButton/NumberButton";
import { useEffect, useState } from "react";
import OperatorButton from "./components/OperatorButton/OperatorButton";
import EqualsButton from "./components/EqualsButton/EqualsButton";

function App() {
  const [currentNumber, setCurrentNumber] = useState();
  const [operator, setOperator] = useState("");
  const [display, setDisplay] = useState("");

  // useEffect(() => {
  //   console.log(currentNumber);
  // }, [currentNumber]);

  const handleNumClick = (number) => {
    setDisplay(`${display}${number}`);
  };

  const handleOperatorClick = (operator) => {
    setCurrentNumber(display);
    setDisplay("");

    if (operator === "/") {
      setOperator("/");
    } else if (operator === "X") {
      setOperator("X");
    } else if (operator === "-") {
      setOperator("-");
    } else if (operator === "+") {
      setOperator("+");
    }
  };

  const handleEquals = () => {
    if (operator === "/") {
      setDisplay(Number(currentNumber) / Number(display));
    } else if (operator === "X") {
      setDisplay(Number(currentNumber) * Number(display));
    } else if (operator === "-") {
      setDisplay(Number(currentNumber) - Number(display));
    } else if (operator === "+") {
      setDisplay(Number(currentNumber) + Number(display));
    }
  };

  return (
    <main className="main">
      <section className="calculator">
        <p className="calculator__display">{display}</p>
        <section className="calculator__num-pad">
          <NumberButtton number={7} handleNumClick={handleNumClick} />
          <NumberButtton number={8} handleNumClick={handleNumClick} />
          <NumberButtton number={9} handleNumClick={handleNumClick} />
          <OperatorButton
            operator={"/"}
            handleOperatorClick={handleOperatorClick}
          />
          <NumberButtton number={4} handleNumClick={handleNumClick} />
          <NumberButtton number={5} handleNumClick={handleNumClick} />
          <NumberButtton number={6} handleNumClick={handleNumClick} />
          <OperatorButton
            operator={"X"}
            handleOperatorClick={handleOperatorClick}
          />
          <NumberButtton number={1} handleNumClick={handleNumClick} />
          <NumberButtton number={2} handleNumClick={handleNumClick} />
          <NumberButtton number={3} handleNumClick={handleNumClick} />
          <OperatorButton
            operator={"-"}
            handleOperatorClick={handleOperatorClick}
          />
          <NumberButtton number={0} handleNumClick={handleNumClick} />
          <EqualsButton operator={"="} handleEquals={handleEquals} />
          <OperatorButton
            operator={"+"}
            handleOperatorClick={handleOperatorClick}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
