import React from "react";
import PropTypes from "prop-types";

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

ChildComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default ChildComponent;
