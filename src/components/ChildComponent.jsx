import React from "react";

const ChildComponent = ({name , age}) => {
  // Destructuring Props
  // const { name, age } = props;
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  );
};

export default ChildComponent;
