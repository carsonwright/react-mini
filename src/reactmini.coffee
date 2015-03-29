ReactMini = {
  createClass: (tag)->
    tag.props = {}
    tag.forceUpdate = ()->
      tag.target.innerHTML = ""
      tag.target.appendChild(tag.render())
      tag
    tag.setState = (data)->
      tag.state = data
      tag.target.innerHTML = ""
      tag.target.appendChild(tag.render())
      tag
    tag.setProps = (data)->
      tag.props = data
      tag.target.innerHTML = ""
      tag.target.appendChild(tag.render())
      tag
    tag
  render: (tag, item)->
    item.innerHTML = ""
    tag.props = tag.getDefaultProps() if tag.getDefaultProps
    tag.state = tag.setInitialState() if tag.setInitialState
    item.appendChild(tag.render())
    tag.target = item
    tag
  createElement: (name, attrs, children)->
    if typeof name == "string"
      element = document.createElement(name)
      children = Array.prototype.slice.call(arguments, -2);

      if attrs
          for attrName in Object.keys(attrs)
            element.setAttribute(attrName, attrs[attrName])
          for child in children
            if typeof child == "object"
              element.appendChild(child)
            else
              element.innerHTML += child
    else
      element = name.render(attrs)
    element
}

