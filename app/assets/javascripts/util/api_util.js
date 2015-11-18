ApiUtil = {
  fetchRestaurants: function (searchParams) {
    $.ajax({
      url: "/api/restaurants",
      type: "GET",
      dataType: "json",
      data: searchParams,
      success: function (restaurants) {
        ApiActions.receiveAllRestaurants(restaurants);
      }
    });
  }
};
