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
      var orderItems = mapOrderItems(order.order_items);

      return (
        <li className="user-profile-index-item" key={order.id}>
          {order.id}
          <ul>
            { orderItems }
          </ul>
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

var mapOrderItems = function (orderItems) {
  var mappedItems = [];
  for (var k in orderItems) {
    var orderItem = orderItems[k];
    
    mappedItems.push(
      <li key={orderItem.id}>
        <span>{ orderItem.qty }</span>
        <strong>{ orderItem.name }</strong>
        <span>{ parseInt(orderItem.price) * parseInt(orderItem.qty) }</span>
      </li>
    );
  }

  return mappedItems;
};
