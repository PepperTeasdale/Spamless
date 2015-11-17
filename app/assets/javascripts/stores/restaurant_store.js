(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";
  var _restaurants = [];

  var resetRestaurants = function (restaurants) {
    _restaurants = restaurants;
  };

  var RestaurantStore = root.RestaurantStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _restaurants.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    find: function (id) {
      _restaurants.forEach(function (restaurant) {
        if (restaurant.id === id) {
          return restaurant;
        }
      });
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case RestaurantConstants.RESTAURANTS_RECEIVED:
          resetRestaurants(payload.restaurants);
          RestaurantStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
