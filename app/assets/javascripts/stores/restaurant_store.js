(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";

  var _restaurants = [];
  var _currentRestaurant;

  var resetRestaurants = function (restaurants) {
    _restaurants = restaurants;
  };

  var updateRestaurant = function (restaurant) {
    var updated = false;
    _restaurants.forEach(function (r) {
      if (r.id === restaurant.id) {
        _restaurants[_restaurants.indexOf(r)] = restaurant;
        updated = true;
      }
    });

    if (!updated) { _restaurants.push(restaurant); }
    _currentRestaurant = restaurant;
  };

  var RestaurantStore = root.RestaurantStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _restaurants.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    cuisineTypes: function () {
      var cuisines = [];
      _restaurants.forEach(function (restaurant) {
        if (cuisines.indexOf(restaurant.restaurant_detail.cuisine_type) === -1 &&
            (typeof restaurant.restaurant_detail.cuisine_type !== "undefined")) {
          cuisines.push(restaurant.restaurant_detail.cuisine_type);
        }
      });

      return cuisines;
    },

    menuCategories: function () {
      var categories = [];
      _currentRestaurant.menu_items.forEach(function(menuItem) {
        if (categories.indexOf(menuItem.menu_category) == -1) {
          categories.push(menuItem.menu_category);
        }
      });

      return categories;
    },

    itemsByCategory: function (category) {
      var items = [];
      _currentRestaurant.menu_items.forEach(function (menuItem) {
        if (menuItem.menu_category === category) {
          items.push(menuItem);
        }
      });
      return items;
    },

    find: function (id) {
      for (var i = 0; i < _restaurants.length; i++) {
        if (_restaurants[i].id === id) {
          return _restaurants[i];
        }
      }
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case RestaurantConstants.RESTAURANTS_RECEIVED:
          resetRestaurants(payload.restaurants);
          RestaurantStore.emit(CHANGE_EVENT);
          break;

        case RestaurantConstants.RESTAURANT_RECEIVED:
          updateRestaurant(payload.restaurant);
          RestaurantStore.emit(CHANGE_EVENT);
          break;

      }
    })
  });

}(this));
