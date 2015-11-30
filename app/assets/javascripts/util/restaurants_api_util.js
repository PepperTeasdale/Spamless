window.RestaurantsApiUtil = {
  fetchManagedRestaurants: function (id) {
    $.ajax({
      url: "api/users/" + id + "/managed_restaurants",
      type: "GET",
      dataType: "json",
      success: function (restaurants) {
        RestaurantActions.userRestaurantsReceived(restaurants);
      },
      error: function (errors) {
      }
    });
  },

  createRestaurant: function (params, callback) {
    $.ajax({
      url: "api/restaurants",
      type: "POST",
      processData: false,
      contentType: false,
      dataType: "json",
      data: params,
      success: function (restaurant) {
        callback && callback(restaurant.id);
      },
      error: function (errors) {
      }
    });
  }
};
