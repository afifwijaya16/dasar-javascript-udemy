import React, { useState, useEffect } from "react";

const RunEffectOnlyOnce = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse evenet");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("object");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>Run Effect Only Once</h3>
      <div>
        Hooks x - {x} Y - {y}
      </div>
    </div>
  );
};

export default RunEffectOnlyOnce;
