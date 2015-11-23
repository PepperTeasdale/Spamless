(function(root) {
  'use strict';

  var CHANGE_EVENT = "CHANGE_EVENT";
  var _uiStates = {
    shoppingCart: false,
    authModalHidden: true
  };

  var UiStore = window.UiStore = $.extend({}, EventEmitter.prototype, {
    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    authModalHidden: function () {
      return _uiStates.authModalHidden;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case UiConstants.TOGGLE_AUTH_MODAL:
          _uiStates.authModalHidden = !_uiStates.authModalHidden;
          UiStore.emit(CHANGE_EVENT);
          break;
        default:

      }
    })
  });

}(this));
