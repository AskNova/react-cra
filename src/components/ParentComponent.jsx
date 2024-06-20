import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="Alex" age="18" />
      <ChildComponent name="Jhon" age="20" />
      <ChildComponent />
      <ChildComponent name = {4} age="Eighteen" />
    </div>
  );
};

const Hello = () => <h3>Hello</h3>;

export  { ParentComponent, Hello };
