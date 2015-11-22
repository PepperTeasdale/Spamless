(function(root) {
  'use strict';
  var _currentUser = {};
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

    isLoggedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case CurrentUserConstants.RECEIVE_CURRENT_USER:
          debugger
          _currentUser = payload.currentUser;
          CurrentUserStore.emit(CHANGE_EVENT);
          break;
        default:

      }
    })
  });

}(this));