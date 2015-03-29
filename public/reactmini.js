var ReactMini;

ReactMini = {
  createClass: function(tag) {
    tag.props = {};
    tag.forceUpdate = function() {
      tag.target.innerHTML = "";
      tag.target.appendChild(tag.render());
      return tag;
    };
    tag.setState = function(data) {
      tag.state = data;
      tag.target.innerHTML = "";
      tag.target.appendChild(tag.render());
      return tag;
    };
    tag.setProps = function(data) {
      tag.props = data;
      tag.target.innerHTML = "";
      tag.target.appendChild(tag.render());
      return tag;
    };
    return tag;
  },
  render: function(tag, item) {
    item.innerHTML = "";
    if (tag.getDefaultProps) {
      tag.props = tag.getDefaultProps();
    }
    if (tag.setInitialState) {
      tag.state = tag.setInitialState();
    }
    item.appendChild(tag.render());
    tag.target = item;
    return tag;
  },
  createElement: function(name, attrs, children) {
    var attrName, child, element, i, j, len, len1, ref;
    if (typeof name === "string") {
      element = document.createElement(name);
      children = Array.prototype.slice.call(arguments, -2);
      if (attrs) {
        ref = Object.keys(attrs);
        for (i = 0, len = ref.length; i < len; i++) {
          attrName = ref[i];
          element.setAttribute(attrName, attrs[attrName]);
        }
        for (j = 0, len1 = children.length; j < len1; j++) {
          child = children[j];
          if (typeof child === "object") {
            element.appendChild(child);
          } else {
            element.innerHTML += child;
          }
        }
      }
    } else {
      element = name.render(attrs);
    }
    return element;
  }
};
