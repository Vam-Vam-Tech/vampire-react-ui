import React from 'react';

const Button = props => {
  return React.createElement("button", {
    className: `px-6 py-2 
            text-${props.color ? props.color : 'neutral'}-500 
            bg-${props.color ? props.color : 'neutral'}-100
            hover:bg-${props.color ? props.color : 'neutral'}-200
            transition-all duration-300 text-center font-medium rounded-${props.rounded ? props.rounded : 'none'}`
  }, props.label || props.children);
};

export { Button };
//# sourceMappingURL=index.modern.js.map
