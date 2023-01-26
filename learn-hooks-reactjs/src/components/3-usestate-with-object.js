import React, { useState } from "react";

const UseStateWithObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>UseState With Object</h3>

      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        placeholder="firsname"
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        placeholder="lastname"
      />
      <h3 style={{ padding: 0, margin: 0 }}>firstName : {name?.firstName}</h3>
      <h3 style={{ padding: 0, margin: 0 }}>lastName : {name?.lastName}</h3>
      <h3 style={{ padding: 0, margin: 0 }}>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default UseStateWithObject;
