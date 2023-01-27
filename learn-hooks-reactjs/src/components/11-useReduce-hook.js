import React, { useReducer } from "react";

const UseReduceHook = () => {
  const initialState = {
    firstCounter: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { firstCounter: state.firstCounter + action.value };
      case "decrement":
        if (state.firstCounter > 0) {
          return { firstCounter: state.firstCounter - action.value };
        }
        return initialState;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>use reducer hook</h3>
      <div>Count - {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReduceHook;
