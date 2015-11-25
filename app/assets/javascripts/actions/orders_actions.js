window.OrdersActions = {
  receiveOrders: function (orders) {
    AppDispatcher.dispatch({
      actionType: OrderConstants.ORDERS_RECEIVED,
      orders: orders
    });
  }
};
