window.OrdersIndex = React.createClass({
  getInitialState: function () {
    return ({ orders: OrdersStore.all() });
  },

  componentDidMount: function () {
    OrdersApiUtil.fetchOrders(CurrentUserStore.currentUser().id);
    OrdersStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    OrdersStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ orders: OrdersStore.all() });
  },

  render: function () {
    var orders = OrdersStore.all().map(function (order) {
      debugger
      return (
        <li className="user-profile-index-item" key={order.id}>
          {order.id}
        </li>
      );
    });

    return (
    <div className="orders-index">
      <h1>ORDERS</h1>
      <ul>
        { orders }
      </ul>
    </div>
  );
  }
});

var mapOrderItems = function (orderItem) {
  return (
    <li>
      <span>{ orderItem.qty }</span>
      <strong>{ orderItem.name }</strong>
      <span>{ orderItem.price * orderItem.qty }</span>
    </li>
  );
};
