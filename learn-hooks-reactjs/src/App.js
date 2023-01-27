import React from "react";
import ClassCounter from "./components/0-class-counter";

// hooks
import HookCounter from "./components/1-hook-counter";
import HookCounterTwo from "./components/2-hook-counter-two";
import UseStateWithObject from "./components/3-usestate-with-object";
import UseStateWithArray from "./components/4-usestate-with-array";
import UseEffectAfterRender from "./components/5-useEffect-after-render";
// import RunEffectOnlyOnce from "./components/6-run-effect-only-once";
import UseEffectWithCleanup from "./components/7-useEffect-with-cleanup";
import IntervalHookCounter from "./components/8-interval-hook-counter";
import FechingDataUseEffect from "./components/9-fetching-data-useEffect";

// useContext
import UseContextComponent1 from "./components/10-1-useContext-hook";
// usereducer
import UseReduceHook from "./components/11-useReduce-hook";
import UserReduceWithUseContext1 from "./components/12-1-useReduce-with-useContext";
import FetchingDataWithUseReduce1 from "./components/14-1-fetching-data-with-useReduce";
import FetchingDataWithUseReduce2 from "./components/14-2-fetching-data-with-useReduce";
import UseCallbackWithHook from "./components/15-useCallback-hook";
import UseMemoWithHook from "./components/16-useMemo-hook";
import UseRefWithHook from "./components/17-useRef-hook";
import UseInputCustomHook1 from "./components/18-useinput-custom-hook-1";

const App = () => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        learn of Hooks
      </h1>
      <ol>
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
        {/* <li><RunEffectOnlyOnce /></li> */}
        <li>
          <UseEffectWithCleanup />
        </li>
        <li>
          <IntervalHookCounter />
        </li>
        <li>
          <FechingDataUseEffect />
        </li>
        <li>
          <h3 style={{ padding: 0, margin: 0 }}>useContext Hooks</h3>
          <UseContextComponent1 />
        </li>
        <li>
          <UseReduceHook />
        </li>
        <li>
          <UserReduceWithUseContext1 />
        </li>
        <li>
          <h3 style={{ padding: 0, margin: 0 }}>
            feaching data with useReduce
          </h3>
          <FetchingDataWithUseReduce1 />
          <FetchingDataWithUseReduce2 />
        </li>
        <li>
          <UseCallbackWithHook />
        </li>
        <li>
          <UseMemoWithHook />
        </li>
        <li>
          <UseRefWithHook />
        </li>
        <li>
          <UseInputCustomHook1 />
        </li>
      </ol>
    </div>
  );
};

export default App;
