ApiActions = {
  receiveAllRestaurants: function (restaurants) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
      restaurants: restaurants
    });
  }
};
