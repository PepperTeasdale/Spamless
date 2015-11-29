window.RestaurantsApiUtil = {
  fetchManagedRestaurants: function (id) {
    $.ajax({
      url: "api/users/" + id + "/managed_restaurants",
      type: "GET",
      dataType: "json",
      success: function (restaurants) {
        RestaurantActions.userRestaurantsReceived(restaurants);
      },
      failure: function (errors) {
        debugger
      }
    });
  }
};
