ApiUtil = {
  fetchRestaurants: function () {
    $.ajax({
      url: "/api/restaurants",
      type: "GET",
      dataType: "json",
      success: function (restaurants) {
        ApiActions.receiveAllRestaurants(restaurants);
      }
    });
  }
};
