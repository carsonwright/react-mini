var Car;

Car = React.createClass({
  isLocked: function() {
    return "blue";
  },
  render: function() {
    var _ref;
    return React.createElement("div", {
      "doors": 4.,
      "locked": this.props.isLocked,
      "data-colour": "red",
      "on": true
    }, React.createElement(Awesome, null), "here it is", React.createElement("p", {
      "className": "seat"
    }, "Which seat can I take? ", ((_ref = this.props) != null ? _ref.seat : void 0) || 'none'));
  }
});
