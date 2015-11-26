ApiUtil = {
  fetchRestaurants: function (searchParams) {
    $.ajax({
      url: "/api/restaurants",
      type: "GET",
      dataType: "json",
      data: searchParams,
      success: function (data) {
        ApiActions.receiveAllRestaurants(data.restaurants);
        CurrentAddressActions.receiveCurrentAddress(data.address);
      },
      error: function (data) {
        UiActions.setFlash($.parseJSON(data.responseText).errors);
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
