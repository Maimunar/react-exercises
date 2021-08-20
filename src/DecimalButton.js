import React from "react";

export const DecimalButton = ({ setInput, input, isDecimal, setIsDecimal }) => {
  const handleClick = () => {
    if (!isDecimal) {
      setIsDecimal(true);
      let localInput = [...input];
      let lastNum = localInput.pop();
      localInput.push(`${lastNum}.`);
      setInput(localInput);
    }
  };
  return (
    <button id="decimal" className="button darkgray" onClick={handleClick}>
      .
    </button>
  );
};
