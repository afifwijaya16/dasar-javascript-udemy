import React, { useState } from "react";
import RunEffectOnlyOnce from "./6-run-effect-only-once";

const UseEffectWithCleanup = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <h3 style={{ padding: 0, margin: 0 }}>UseEffect with Cleanup</h3>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <RunEffectOnlyOnce />}
    </>
  );
};

export default UseEffectWithCleanup;
