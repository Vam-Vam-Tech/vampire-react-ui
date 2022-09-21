import React from 'react';

var Button = function Button(props) {
  return React.createElement("button", {
    className: "px-6 py-2 \n            text-" + (props.color ? props.color : 'neutral') + "-600 \n            bg-" + (props.color ? props.color : 'neutral') + "-100 \n            text-center rounded-md"
  }, props.label || props.children);
};

export { Button };
//# sourceMappingURL=index.modern.js.map
