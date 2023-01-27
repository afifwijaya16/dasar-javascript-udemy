import React from "react";
import useInput from "./18-useinput-custom-hook-2";

const UseInputCustomHook1 = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}`);
    resetFirstName("");
    resetLastName("");
  };
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>feaching data with useReduce</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>firstname</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>lastname</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default UseInputCustomHook1;
