import "./styles/App.scss";
import NumberButtton from "./components/NumberButton/NumberButton";
import { useState } from "react";
import OperatorButton from "./components/OperatorButton/OperatorButton";
import EqualsButton from "./components/EqualsButton/EqualsButton";
import backspaceIcon from "./assets/icons/backspace-icon.svg";
import deleteIcon from "./assets/icons/delete.svg";

function App() {
  const [currentNumber, setCurrentNumber] = useState();
  const [operator, setOperator] = useState("");
  const [display, setDisplay] = useState("");
  const [isReadyToDelete, setIsReadyToDelete] = useState(false);

  const handleNumClick = (number) => {
    setDisplay(`${display}${number}`);
  };

  const handleOperatorClick = (operator) => {
    setCurrentNumber(display);
    setDisplay("");

    if (operator === "÷") {
      setOperator("÷");
    } else if (operator === "X") {
      setOperator("X");
    } else if (operator === "-") {
      setOperator("-");
    } else if (operator === "+") {
      setOperator("+");
    }
  };

  const handleEquals = () => {
    if (!currentNumber) return;

    setIsReadyToDelete(true);

    if (operator === "÷") {
      setDisplay(`${Number(currentNumber) / Number(display)}`);
    } else if (operator === "X") {
      setDisplay(`${Number(currentNumber) * Number(display)}`);
    } else if (operator === "-") {
      setDisplay(`${Number(currentNumber) - Number(display)}`);
    } else if (operator === "+") {
      setDisplay(`${Number(currentNumber) + Number(display)}`);
    } else {
      return;
    }
  };

  const handleBackspace = () => {
    if (!display) return;

    console.log(typeof display);

    const displayArray = display.split("");
    displayArray.pop();
    setDisplay(displayArray.join(""));
  };

  const handleDelete = () => {
    setCurrentNumber("");
    setOperator("");
    setDisplay("");
    setIsReadyToDelete(false);
  };

  return (
    <main className="main">
      <section className="calculator">
        <section className="calculator__window-btns">
          <div className="window-btns__btn window-btns__btn--red"></div>
          <div className="window-btns__btn window-btns__btn--yellow"></div>
          <div className="window-btns__btn window-btns__btn--green"></div>
        </section>
        <section className="calculator__display-container">
          <p className="calculator__display">{display}</p>
          {!isReadyToDelete && (
            <img
              onClick={handleBackspace}
              className="calculator__backspace"
              src={backspaceIcon}
              alt="backspace-icon"
            />
          )}
          {isReadyToDelete && (
            <img
              onClick={handleDelete}
              className="calculator__delete"
              src={deleteIcon}
              alt=""
            />
          )}
        </section>

        <section className="calculator__num-pad">
          <NumberButtton number={7} handleNumClick={handleNumClick} />
          <NumberButtton number={8} handleNumClick={handleNumClick} />
          <NumberButtton number={9} handleNumClick={handleNumClick} />
          <OperatorButton
            operator={"÷"}
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
            currentOperator={operator}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
