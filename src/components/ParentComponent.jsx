import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const handleClick = (message) => {
    console.log(message);
  }
  return (
    <div>
      <ChildComponent name="Alex" age={18} />
      <ChildComponent name="Jhon" age={20} />
      <ChildComponent />
      <ChildComponent name = {"Rex"} age={22} handleClick={handleClick} />
    </div>
  );
};

const Hello = () => <h3>Hello</h3>;

export  { ParentComponent, Hello };
