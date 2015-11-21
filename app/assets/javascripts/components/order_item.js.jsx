window.OrderItem = React.createClass({
  deleteOrderItem: function () {
    OrderItemActions.removeItem()
  },

  render: function () {
    return (
      <div className="order-item">
        <button onClick={ this.deleteOrderItem }>X</button>
        <span>{ this.props.item.qty }</span>
        <h5>{ this.props.item.name }</h5>
        <span>{ this.props.item.price * this.props.item.qty }</span>
      </div>
    );
  }
});
