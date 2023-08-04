import React from "react";
import { PersonProps } from "./Person.types";

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      Person {name.first}
      {name.last}
    </div>
  );
};

export default Person;
