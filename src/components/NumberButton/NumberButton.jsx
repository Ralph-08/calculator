import "./NumberButton.scss";

const NumberButton = ({ number, handleNumClick }) => {
  return (
    <button className="number-btn" onClick={() => handleNumClick(number)}>
      {number}
    </button>
  );
};

export default NumberButton;
