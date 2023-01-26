import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>Use Hooks Counter Two</h3>
      <h5 style={{ padding: 0, margin: 0 }}>Count {count}</h5>
      <button onClick={() => setCount(initialCount)}> Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          count > 0 && setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default HookCounterTwo;
