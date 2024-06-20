import React from "react";
import PropTypes from "prop-types";

const ChildComponent = ({name = 'Unknown', age = '0', handleClick }) => {
  // Destructuring Props
  // const { name, age } = props;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => handleClick && handleClick("Hello!!!")}>Click Me</button>
    </div>
  );
};

// ChildComponent.defaultProps = {
//     name: 'Unknown',
//     age: 0,
// };

ChildComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default ChildComponent;
