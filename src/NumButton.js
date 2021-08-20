import React from "react";

export const NumButton = ({
  number,
  setInput,
  input,
  isDecimal,
  isFinished,
  reset,
}) => {
  const handleClick = () => {
    let localInput = [0];
    if (isFinished) {
      reset();
    } else {
      localInput = [...input];
    }
    let lastNum = localInput.pop();
    if (!["+", "-", "*", "/"].includes(lastNum)) {
      if (isDecimal) {
        console.log(lastNum, typeof lastNum);
        lastNum = lastNum + number.value;
      } else {
        lastNum = lastNum * 10 + number.value;
      }
    } else {
      localInput.push(lastNum);
      lastNum = number.value;
    }
    localInput.push(lastNum);
    setInput(localInput);
  };
  return (
    <button id={number.name} className="button darkgray" onClick={handleClick}>
      {number.value}
    </button>
  );
};
