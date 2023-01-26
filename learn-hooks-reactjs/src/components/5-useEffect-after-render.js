import React, { useState, useEffect } from "react";

const UseEffectAfterRender = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`use effect - updating document title`);
    document.title = `you clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>UseEffect After Render</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default UseEffectAfterRender;
