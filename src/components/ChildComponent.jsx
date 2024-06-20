import React from "react";

const ChildComponent = ({name = 'Unknown', age = '0'}) => {
  // Destructuring Props
  // const { name, age } = props;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// ChildComponent.defaultProps = {
//     name: 'Unknown',
//     age: 0,
// };

export default ChildComponent;
