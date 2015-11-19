ApiUtil = {
  fetchRestaurants: function (searchParams, callback) {
    $.ajax({
      url: "/api/restaurants",
      type: "GET",
      dataType: "json",
      data: searchParams,
      success: function (data) {
        ApiActions.receiveAllRestaurants(data.restaurants);
        callback && callback({ address: data.address});
      }
    });
  }
};
