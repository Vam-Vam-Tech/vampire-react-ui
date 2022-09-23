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
    className: "px-6 py-2 \n            text-" + (props.color ? props.color : 'neutral') + "-500 \n            bg-" + (props.color ? props.color : 'neutral') + "-100\n            hover:bg-" + (props.color ? props.color : 'neutral') + "-200\n            transition-all duration-300 text-center font-medium rounded-" + (props.rounded ? props.rounded : 'none')
  }, props.label || props.children);
};

exports.Button = Button;
exports.Progress = index;
//# sourceMappingURL=index.js.map
