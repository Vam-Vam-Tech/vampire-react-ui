function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Button = function Button(props) {
  return React.createElement("button", {
    className: 'px-2 py-1 text-red-600 bg-red-200'
  }, props.label || props.children);
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
