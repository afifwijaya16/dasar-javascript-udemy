import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      count : {state.count}
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement 10
      </button>
    </div>
  );
};
