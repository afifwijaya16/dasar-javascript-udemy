import React, { useReducer } from "react";
import UseReduceWithUseContext2 from "./12-2-useReduce-with-useContext";
import UseReduceWithUseContext3 from "./12-3-useReduce-with-useContext";
export const CountContext = React.createContext();

const UserReduceWithUseContext1 = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        if (state > 0) {
          return state - 1;
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
      <h3 style={{ padding: 0, margin: 0 }}>usereduce with usecontext</h3>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>Count - {count}</div>
        <UseReduceWithUseContext2 />
        <UseReduceWithUseContext3 />
      </CountContext.Provider>
    </div>
  );
};

export default UserReduceWithUseContext1;
