import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="Alex" age="18" />
      <ChildComponent name="Jhon" age="20" />
    </div>
  );
};

export default ParentComponent;
