import React from "react";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Title } from "./components/Title";
import { Button } from "./components/Event/Button";
import { Input } from "./components/Event/Input";
import { Container } from "./components/style/Container";
import { LoggedIn } from "./components/State/LoggedIn";
import { User } from "./components/State/User";
import { Counter } from "./components/State/Counter";

function App() {
  const personName = {
    first: "f",
    last: "j",
  };

  const nameList = [
    {
      first: "Afif",
      last: "Wijaya",
    },
    {
      first: "Clark",
      last: "kent",
    },
  ];
  return (
    <div className="App">
      <h1>Materi TypeScript</h1>
      <h4 className="mt-1">1. Props</h4>
      <Greet name="afif" messageCount={10} isLoggedIn={true} />
      <h4 className="mt-1">2. Props Object</h4>
      <Person name={personName} />
      <h4 className="mt-1">3. Props Array</h4>
      <PersonList names={nameList} />
      <h4 className="mt-1">4. Advanced Props</h4>
      <ul>
        <li>
          <Status status="loading" />
        </li>
        <li>
          <Heading>PlaceHolder</Heading>
        </li>
        <li>
          <Title>
            <Heading>Title Heading</Heading>
          </Title>
        </li>
      </ul>
      <h4 className="mt-1">5. Props Event</h4>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <h4 className="mt-1">6. Props Style</h4>
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <h4 className="mt-1">7. useState Hook</h4>
      <ul>
        <li>
          <LoggedIn />
        </li>
        <li>
          <User />
        </li>
      </ul>
      <h4 className="mt-1">8. useReducer Hook</h4>
      <ul>
        <li>
          <Counter />
        </li>
      </ul>
    </div>
  );
}

export default App;
