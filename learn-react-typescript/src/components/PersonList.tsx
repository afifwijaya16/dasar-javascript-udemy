import React from "react";
import { Name } from "./Person.types";

type PersonsListProps = {
  names: Name[];
};

const PersonList = (props: PersonsListProps) => {
  return (
    <ul>
      {props.names.map((name) => {
        return (
          <li key={name.first}>
            {name.first} {name.last}
          </li>
        );
      })}
    </ul>
  );
};

export default PersonList;
