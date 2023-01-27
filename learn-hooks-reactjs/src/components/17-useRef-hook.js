import React, { useEffect, useRef } from "react";

const UseRefWithHook = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      {" "}
      <h3 style={{ padding: 0, margin: 0 }}>useRef with hook</h3>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRefWithHook;
