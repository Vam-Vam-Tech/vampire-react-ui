import React, { Fragment } from 'react';

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

const md$1 = `max-w-[256px] max-h-[36px]`;
const sm$1 = `max-w-[256px] max-h-[48px]`;
const lg$1 = `max-w-[343px] max-h-[56px]`;
const baseStyle$1 = `flex justify-center item-center`;

const Input = ({
  label,
  children,
  onChange,
  className,
  placeholder,
  size
}) => {
  return React.createElement(Fragment, null, React.createElement("p", {
    className: 'mb-1 text-gray-600'
  }, label), React.createElement("input", {
    className: `${baseStyle$1} ${size === 'sm' ? sm$1 : size === 'lg' ? lg$1 : md$1} px-2 py-2 bg-transparent text-gray-500 border border-red-400 rounded-md text-sm outline-none ${className}`,
    onChange: e => onChange ? onChange(e) : null,
    placeholder: placeholder
  }), React.createElement("span", {
    className: 'text-xs text-red-500'
  }, children));
};

export { Button, Input, index as Progress };
//# sourceMappingURL=index.modern.js.map
