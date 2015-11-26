window.RestaurantActions = {
  orderMethodChanged: function (orderMethod) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.ORDER_METHOD_CHANGED,
      orderMethod: orderMethod
    });
  }
};
