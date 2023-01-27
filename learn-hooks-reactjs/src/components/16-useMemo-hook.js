import React, { useState, useMemo } from "react";

const UseMemoWithHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 2);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>useMemo with hook</h3>
      <div>
        <button onClick={incrementOne}>count one - {counterOne}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>count two - {counterTwo}</button>
      </div>
    </div>
  );
};

export default UseMemoWithHook;
