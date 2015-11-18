ApiUtil = {
  fetchRestaurants: function (address) {
    $.ajax({
      url: "/api/restaurants",
      type: "GET",
      dataType: "json",
      data: { address: address },
      success: function (restaurants) {
        ApiActions.receiveAllRestaurants(restaurants);
        
      }
    });
  }
};
