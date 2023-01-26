import React, { useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>Use Hooks Counter</h3>
      <button onClick={() => setCounter(counter + 1)}>Count{counter}</button>
    </div>
  );
};

export default HookCounter;
