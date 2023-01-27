import React, { useContext } from "react";
import { CountContext } from "./12-1-useReduce-with-useContext";
const UseReduceWithUseContext2 = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component 2
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReduceWithUseContext2;
