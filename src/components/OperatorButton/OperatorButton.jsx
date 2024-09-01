import "./OperatorButton.scss";

const OperatorButton = ({ operator, handleOperatorClick }) => {
  return (
    <button
      className={
        operator !== "=" ? "operator-btn" : "operator-btn operator-btn--wide "
      }
      onClick={() => handleOperatorClick(operator)}
    >
      {operator}
    </button>
  );
};

export default OperatorButton;
