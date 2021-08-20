import React from "react";

export const OperationButton = ({
  operation,
  setInput,
  input,
  isFinished,
  setIsDecimal,
  reset,
}) => {
  const isOperator = (item) => ["+", "*", "/", "-"].includes(item);

  const handleClick = () => {
    setIsDecimal(false);
    let localInput = [...input];
    if (
      operation.value !== "-" &&
      isOperator(localInput[localInput.length - 2]) &&
      localInput[localInput.length - 1] === "-"
    ) {
      localInput.pop();
      localInput.pop();
    } else if (
      operation.value !== "-" ||
      isOperator(localInput[localInput.length - 2])
    ) {
      if (isOperator(localInput[localInput.length - 1])) {
        localInput.pop();
      }
    }
    if (isFinished) {
      const result = localInput.pop();
      reset();
      localInput = [result];
    }

    localInput.push(operation.value);
    console.log(localInput);
    setInput(localInput);
  };
  return (
    <button
      id={operation.name}
      className="button lightgray"
      onClick={handleClick}
    >
      {operation.value}
    </button>
  );
};
