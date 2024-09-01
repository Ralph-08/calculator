import "./EqualsButton.scss";

const EqualsButton = ({ handleEquals }) => {
  return (
    <button className={"equals-btn"} onClick={() => handleEquals()}>
      =
    </button>
  );
};

export default EqualsButton;
