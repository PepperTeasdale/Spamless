ApiActions = {
  receiveAllRestaurants: function (restaurants, callback) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
      restaurants: restaurants,
    });
  }
};
