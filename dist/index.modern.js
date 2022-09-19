import React from 'react';

var Button = function Button(props) {
  return React.createElement("button", {
    className: 'px-2 py-1 text-red-600 bg-red-200'
  }, props.label || props.children);
};

export { Button };
//# sourceMappingURL=index.modern.js.map
