window.RestaurantActions = {
  orderMethodChanged: function (orderMethod) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.ORDER_METHOD_CHANGED,
      orderMethod: orderMethod
    });
  },

  userRestaurantsReceived: function (restaurants) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.USER_RESTAURANTS_RECEIVED,
      restaurants: restaurants
    });
  }
};
