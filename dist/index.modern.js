import React from 'react';

const md = `max-w-[256px] max-h-[36px]`;
const sm = `max-w-[256px] max-h-[48px]`;
const lg = `max-w-[343px] max-h-[56px]`;
const baseStyle = `flex justify-center item-center`;

const Button = ({
  label,
  children,
  onClick,
  className,
  size
}) => {
  return React.createElement("button", {
    className: `${baseStyle} ${size === 'sm' ? sm : size === 'lg' ? lg : md} px-4 py-1 bg-green-400 text-green-800 ${className}`,
    onClick: e => onClick ? onClick(e) : null
  }, label || children);
};

const Spinner = ({
  label,
  children
}) => {
  return React.createElement("div", {
    className: 'w-[78px] h-[53px]'
  }, React.createElement("div", {
    className: 'w-[24px] h-[24px]'
  }, React.createElement("span", {
    className: 'border'
  }), React.createElement("span", {
    className: 'border'
  })), label || children);
};

var index = {
  Spinner
};

export { Button, index as Progress };
//# sourceMappingURL=index.modern.js.map
