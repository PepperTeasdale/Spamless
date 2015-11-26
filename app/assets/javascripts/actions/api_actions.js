window.ApiActions = {
  receiveAllRestaurants: function (restaurants, callback) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
      restaurants: restaurants
    });
  },

  receiveSingleRestaurant: function (restaurant) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.RESTAURANT_RECEIVED,
      restaurant: restaurant
    });
  }
};
