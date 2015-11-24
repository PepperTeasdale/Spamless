window.OrderItem = React.createClass({
  deleteOrderItem: function () {
    OrderItemActions.removeItem(this.props.item);
  },

  render: function () {
    return (
      <li className="order-item">
        <div className="group">
          <button onClick={ this.deleteOrderItem }>X</button>
          <span>{ this.props.item.qty }</span>
        </div>
        <dl className="group">
          <dt>{ this.props.item.name }</dt>
          <dd>{ "$" + (this.props.item.price * this.props.item.qty).toFixed(2) }</dd>
        </dl>
      </li>
    );
  }
});
