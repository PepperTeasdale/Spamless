(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";

  var _restaurants = [];
  var _currentRestaurant;
  var _orderMethod = "delivery";
  var _page = 1;

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

    paginate: function (n) {
      var start = (_page - 1) * n;
      return this.filteredRestaurants().slice(start, start + n);
    },

    count: function () {
      return _restaurants.length;
    },

    currentRestaurant: function () {
      return $.extend({}, _currentRestaurant);
    },

    filteredRestaurants: function () {
      var filters = FilterStore.all();
      var filtered = [];
      _restaurants.forEach(function (restaurant) {
        var cuisine = restaurant.restaurant_detail.cuisine_type;

        if (filters.cuisines.length === 0 ||
            filters.cuisines.indexOf(cuisine) !== -1) {
          filtered.push(restaurant);
        }
      });

      return filtered;
    },

    page: function () {
      return _page;
    },

    featuredRestaurants: function (num) {
      return _restaurants.slice(0, num);
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    orderMethod: function () {
      return _orderMethod;
    },

    countByCuisine: function (cuisine) {
      var count = 0;

      _restaurants.forEach(function (restaurant) {
        if (restaurant.restaurant_detail.cuisine_type === cuisine) {
          count++;
        }
      });

      return count;
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
      if (!_currentRestaurant) { return []; }
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

        case RestaurantConstants.ORDER_METHOD_CHANGED:
          _orderMethod = payload.orderMethod;
          RestaurantStore.emit(CHANGE_EVENT);
          break;

        case RestaurantConstants.PAGE_CHANGED:
          _page += payload.val;
          RestaurantStore.emit(CHANGE_EVENT);
          break;

        case FilterConstants.UPDATE_CUISINES:
          RestaurantStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
