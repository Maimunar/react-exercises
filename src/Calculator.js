import React, { useState } from "react";
import { ClearButton } from "./ClearButton";
import { Display } from "./Display";
import { EqualButton } from "./EqualButton";
import { NUMS, OPERATIONS } from "./consts";
import { NumButton } from "./NumButton";
import { DecimalButton } from "./DecimalButton";
import { OperationButton } from "./OperationButton";

export const Calculator = () => {
  const [input, setInput] = useState([0]);
  const [isDecimal, setIsDecimal] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const reset = () => {
    setInput([0]);
    setIsDecimal(false);
    setIsFinished(false);
  };

  return (
    <div id="container">
      <Display input={input} />
      <ClearButton clear={reset} />
      <EqualButton
        setIsFinished={setIsFinished}
        isFinished={isFinished}
        input={input}
        setInput={setInput}
        setIsDecimal={setIsDecimal}
      />
      {NUMS.map((num) => (
        <NumButton
          key={num.value}
          number={num}
          setInput={setInput}
          input={input}
          isDecimal={isDecimal}
          isFinished={isFinished}
          setIsFinished={setIsFinished}
          reset={reset}
        />
      ))}
      <DecimalButton
        setInput={setInput}
        input={input}
        isDecimal={isDecimal}
        setIsDecimal={setIsDecimal}
      />
      {OPERATIONS.map((op) => (
        <OperationButton
          key={op.value}
          operation={op}
          setInput={setInput}
          isFinished={isFinished}
          setIsDecimal={setIsDecimal}
          input={input}
          reset={reset}
        />
      ))}
    </div>
  );
};
