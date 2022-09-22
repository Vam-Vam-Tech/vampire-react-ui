function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var md = "max-w-[256px] max-h-[36px]";
var sm = "max-w-[256px] max-h-[48px]";
var lg = "max-w-[343px] max-h-[56px]";
var baseStyle = "flex justify-center item-center";

var Button = function Button(_ref) {
  var label = _ref.label,
      children = _ref.children,
      _onClick = _ref.onClick,
      className = _ref.className,
      size = _ref.size;
  return React__default.createElement("button", {
    className: baseStyle + " " + (size === 'sm' ? sm : size === 'lg' ? lg : md) + " px-4 py-1 bg-green-400 text-green-800 " + className,
    onClick: function onClick(e) {
      return _onClick ? _onClick(e) : null;
    }
  }, label || children);
};

var Spinner = function Spinner(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return React__default.createElement("div", {
    className: 'w-[78px] h-[53px]'
  }, React__default.createElement("div", {
    className: 'w-[24px] h-[24px]'
  }, React__default.createElement("span", {
    className: 'border'
  }), React__default.createElement("span", {
    className: 'border'
  })), label || children);
};

var index = {
  Spinner: Spinner
};

var md$1 = "max-w-[256px] max-h-[36px]";
var sm$1 = "max-w-[256px] max-h-[48px]";
var lg$1 = "max-w-[343px] max-h-[56px]";
var baseStyle$1 = "flex justify-center item-center";

var Input = function Input(_ref) {
  var label = _ref.label,
      children = _ref.children,
      _onChange = _ref.onChange,
      className = _ref.className,
      placeholder = _ref.placeholder,
      size = _ref.size;
  return React__default.createElement(React.Fragment, null, React__default.createElement("p", {
    className: 'mb-1 text-gray-600'
  }, label), React__default.createElement("input", {
    className: baseStyle$1 + " " + (size === 'sm' ? sm$1 : size === 'lg' ? lg$1 : md$1) + " px-2 py-2 bg-transparent text-gray-500 border border-red-400 rounded-md text-sm outline-none " + className,
    onChange: function onChange(e) {
      return _onChange ? _onChange(e) : null;
    },
    placeholder: placeholder
  }), React__default.createElement("span", {
    className: 'text-xs text-red-500'
  }, children));
};

exports.Button = Button;
exports.Input = Input;
exports.Progress = index;
//# sourceMappingURL=index.js.map
