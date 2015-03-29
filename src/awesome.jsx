Car = React.createClass
  isLocked: ->
    "blue"
  render: ->
    <div doors={4} locked={@props.isLocked} data-colour="red" on>
      <Awesome />
      {"here it is"}
      <p className="seat">Which seat can I take? {@props?.seat or 'none'}</p>
    </div>
