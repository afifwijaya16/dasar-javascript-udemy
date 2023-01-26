import React from "react";
import ClassCounter from "./components/0-class-counter";

// hooks
import HookCounter from "./components/1-hook-counter";
import HookCounterTwo from "./components/2-hook-counter-two";
import UseStateWithObject from "./components/3-usestate-with-object";
import UseStateWithArray from "./components/4-usestate-with-array";
import UseEffectAfterRender from "./components/5-useEffect-after-render";
import RunEffectOnlyOnce from "./components/6-run-effect-only-once";
import UseEffectWithCleanup from "./components/7-useEffect-with-cleanup";

const App = () => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        learn of Hooks
      </h1>
      <ul>
        <li>
          <ClassCounter />
        </li>
        <li>
          <HookCounter />
        </li>
        <li>
          <HookCounterTwo />
        </li>
        <li>
          <UseStateWithObject />
        </li>
        <li>
          <UseStateWithArray />
        </li>
        <li>
          <UseEffectAfterRender />
        </li>
        <li>{/* <RunEffectOnlyOnce /> */}</li>
        <li>
          <UseEffectWithCleanup />
        </li>
      </ul>
    </div>
  );
};

export default App;
