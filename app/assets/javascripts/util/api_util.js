ApiUtil = {
  fetchRestaurants: function (searchParams) {
    $.ajax({
      url: "/api/restaurants",
      type: "GET",
      dataType: "json",
      data: searchParams,
      success: function (data) {
        ApiActions.receiveAllRestaurants(data.restaurants);
      }
    });
  }
};
