(function(root) {
  'use strict';

  var FLASH = "flash";
  var CHANGE_EVENT = "CHANGE_EVENT";
  var _uiStates = {
    shoppingCart: false,
    authModalHidden: true,
    flash: []
  };

  var UiStore = window.UiStore = $.extend({}, EventEmitter.prototype, {
    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    addFlashHandler: function (callback) {
      this.on(FLASH, callback);
    },

    removeFlashHandler: function (callback) {
      this.removeListener(FLASH, callback);
    },

    authModalHidden: function () {
      return _uiStates.authModalHidden;
    },

    flash: function () {
      return _uiStates.flash;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case UiConstants.TOGGLE_AUTH_MODAL:
          _uiStates.authModalHidden = !_uiStates.authModalHidden;
          UiStore.emit(CHANGE_EVENT);
          break;
        case UiConstants.SET_FLASH:
          _uiStates.flash = payload.messages;
          UiStore.emit(FLASH);
          break;
      }
    })
  });

}(this));
