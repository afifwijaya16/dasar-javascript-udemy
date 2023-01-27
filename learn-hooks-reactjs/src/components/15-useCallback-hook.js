import React, { useState, useCallback } from "react";

const UseCallbackWithHook = () => {
  const [age, setAge] = useState(25);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>useCallback with hook</h3>
      <input type="text" value={age} disabled />
      <button onClick={incrementAge}>increment Age</button>
    </div>
  );
};

export default UseCallbackWithHook;
