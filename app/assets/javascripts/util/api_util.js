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
  },

  fetchSingleRestaurant: function (id) {
    $.ajax({
      url: "/api/restaurants/" + id,
      type: "GET",
      dataType: "json",
      success: function (data) {
        ApiActions.receiveSingleRestaurant(data);
      }
    });
  }
};
