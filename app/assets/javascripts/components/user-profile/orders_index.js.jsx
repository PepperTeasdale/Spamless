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
    var orders = this.state.orders.map(function (order) {
      var orderItems = mapOrderItems(order.order_items);

      return (
        <li className="user-profile-index-item group" key={order.id}>
          <img
            className="restaurant-photo"
            src="http://lorempixel.com/150/150/food"
          />
          <div className="order-item-info">
            <ReactRouter.Link
              to={ "/restaurants/" + order.restaurant_id }
              className="order-item-restaurant-link"
            >
              {order.restaurant.name}
            </ReactRouter.Link>
            <small>{ "Ordered on " + order.created_at }</small>
            <small>{ "Delivered to " + order.address }</small>
            <ul className="orders-index-order">
              { orderItems }
            </ul>
          </div>
        </li>
      );
    });

    return (
    <div className="orders-index">
      <h1 className="user-profile-index-header">PREVIOUS ORDERS</h1>
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
        <span>{ "$" + parseInt(orderItem.price) * parseInt(orderItem.qty) }</span>
      </li>
    );
  }

  return mappedItems;
};
