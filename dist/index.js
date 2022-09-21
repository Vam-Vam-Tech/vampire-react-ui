function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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
  return React.createElement("button", {
    className: baseStyle + " " + (size === 'sm' ? sm : size === 'lg' ? lg : md) + " px-4 py-1 bg-green-400 text-green-800 " + className,
    onClick: function onClick(e) {
      return _onClick ? _onClick(e) : null;
    }
  }, label || children);
};

var Spinner = function Spinner(_ref) {
  var label = _ref.label,
      children = _ref.children;
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
  Spinner: Spinner
};

exports.Button = Button;
exports.Progress = index;
//# sourceMappingURL=index.js.map
