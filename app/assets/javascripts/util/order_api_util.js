window.OrdersApiUtil = {
  submitOrder: function (data) {
    $.ajax({
      url: '/api/orders',
      type: 'POST',
      data: { order: data },
      dataType: 'json',
      success: function (data) {
        var restaurantName = RestaurantStore.find(data.restaurant_id).name;
        UiActions.setFlash(["Successfully placed order with " + restaurantName]);
      },
      error: function (data) {
        UiActions.setFlash($.parseJSON(data.responseText));
      }
    });
  }
};
