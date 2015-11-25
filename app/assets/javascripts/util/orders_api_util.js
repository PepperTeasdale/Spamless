window.OrdersApiUtil = {
  submitOrder: function (data, callback) {
    $.ajax({
      url: '/api/orders',
      type: 'POST',
      data: { order: data },
      dataType: 'json',
      success: function (data) {
        var restaurantName = RestaurantStore.find(data.restaurant_id).name;
        UiActions.setFlash(["Successfully placed order with " + restaurantName]);
        callback();
      },
      error: function (data) {
        UiActions.setFlash($.parseJSON(data.responseText));
      }
    });
  },

  fetchOrders: function (id) {
    $.ajax({
      url: '/api/users/' + id + '/orders',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        OrdersActions.receiveOrders(data.orders);
      },
      error: function () {
        UiActions.setFlash(["Something went wrong"]);
      }
    });
  }
};
