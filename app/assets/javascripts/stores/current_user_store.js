(function(root) {
  'use strict';

  var _currentUser = {};
  var _userRestaurants = [];
  var CHANGE_EVENT = "change";

  var CurrentUserStore = root.CurrentUserStore = $.extend({}, EventEmitter.prototype, {
    currentUser: function () {
      return $.extend({}, _currentUser);
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    isSignedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    allRestaurants: function () {
      return _userRestaurants.slice(0);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case CurrentUserConstants.RECEIVE_CURRENT_USER:
          _currentUser = payload.currentUser;
          CurrentUserStore.emit(CHANGE_EVENT);
          break;

        case RestaurantConstants.USER_RESTAURANTS_RECEIVED:
          _userRestaurants = payload.restaurants;
          CurrentUserStore.emit(CHANGE_EVENT);
      }
    })
  });

}(this));
