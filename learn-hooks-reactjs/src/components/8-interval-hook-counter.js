import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>Interval Hook Counter</h3>
      <div>count {count}</div>
    </div>
  );
};

export default IntervalHookCounter;
