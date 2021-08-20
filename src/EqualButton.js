import React from "react";

export const EqualButton = ({
  setIsFinished,
  isFinished,
  input,
  setInput,
  setIsDecimal,
}) => {
  const isOperator = (item) => ["+", "*", "/", "-"].includes(item);
  const handleClick = () => {
    setIsDecimal(false);
    if (isFinished) return;
    let localInput = [...input];
    if (isOperator(localInput[localInput.length - 1])) {
      localInput.pop();
    }
    localInput = prepInput(localInput);
    const output = calcOutput([...localInput]);
    localInput.push("=");
    localInput.push(output);
    setInput(localInput);
    setIsFinished(true);
  };
  const prepInput = (input) => {
    for (let i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) input[i] = Number(input[i]);
      if (["*", "/", "+", "-"].includes(input[i - 1]) && input[i] === "-") {
        let num = -input[i + 1];
        input.splice(i, 2, num);
        i++;
      }
    }

    return input;
  };

  const calcOutput = (input) => {
    while (input.some((item) => item === "*" || item === "/")) {
      for (let i = 0; i <= input.length; i++) {
        if (input[i] === "*" || input[i] === "/") {
          const [firstNum, op, secondNum] = [
            input[i - 1],
            input[i],
            input[i + 1],
          ];
          let result;
          if (op === "*") result = firstNum * secondNum;
          else result = firstNum / secondNum;
          input.splice(i - 1, 3, result);
          break;
        }
      }
    }

    while (input.some((item) => item === "+" || item === "-")) {
      for (let i = 0; i <= input.length; i++) {
        if (input[i] === "+" || input[i] === "-") {
          const [firstNum, op, secondNum] = [
            input[i - 1],
            input[i],
            input[i + 1],
          ];
          let result;
          if (op === "+") result = firstNum + secondNum;
          else result = firstNum - secondNum;
          input.splice(i - 1, 3, result);
          break;
        }
      }
    }
    return input[0];
  };

  return (
    <button id="equals" className="button" onClick={handleClick}>
      =
    </button>
  );
};
