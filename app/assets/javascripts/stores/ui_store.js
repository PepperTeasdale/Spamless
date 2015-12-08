(function(root) {
  'use strict';

  var FLASH = "flash";
  var CHANGE_EVENT = "CHANGE_EVENT";
  var _uiStates = {
    shoppingCartHidden: true,
    authModalHidden: true,
    flash: [],
    profileDropDownHidden: true,
    menuItemModalHidden: true
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

    shoppingCartHidden: function () {
      return _uiStates.shoppingCartHidden;
    },

    menuItemModalHidden: function () {
      return _uiStates.menuItemModalHidden;
    },

    flash: function () {
      return _uiStates.flash;
    },

    profileDropDownHidden: function () {
      return _uiStates.profileDropDownHidden;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case UiConstants.TOGGLE_AUTH_MODAL:
          _uiStates.authModalHidden = !_uiStates.authModalHidden;
          UiStore.emit(CHANGE_EVENT);
          break;

        case UiConstants.CLOSE_AUTH_MODAL:
          _uiStates.authModalHidden = true;
          UiStore.emit(CHANGE_EVENT);
          break;

        case UiConstants.TOGGLE_PROFILE_DROP_DOWN:
          _uiStates.profileDropDownHidden = !_uiStates.profileDropDownHidden;
          UiStore.emit(CHANGE_EVENT);
          break;

        case UiConstants.CLOSE_PROFILE_DROP_DOWN:
          _uiStates.profileDropDownHidden = true;
          UiStore.emit(CHANGE_EVENT);
          break;

        case UiConstants.SET_FLASH:
          _uiStates.flash = payload.messages;
          UiStore.emit(FLASH);
          break;

        case UiConstants.CLOSE_SHOPPING_CART:
          _uiStates.shoppingCartHidden = true;
          UiStore.emit(CHANGE_EVENT);
          break;

        case UiConstants.OPEN_SHOPPING_CART:
          _uiStates.shoppingCartHidden = false;
          UiStore.emit(CHANGE_EVENT);
          break;

        case UiConstants.TOGGLE_SHOPPING_CART:
          _uiStates.shoppingCartHidden = !_uiStates.shoppingCartHidden;
          UiStore.emit(CHANGE_EVENT);
          break;

        case UiConstants.OPEN_MENU_ITEM_MODAL:
          _uiStates.menuItemModalHidden = false;
          UiStore.emit(CHANGE_EVENT);
          break;

        case UiConstants.CLOSE_MENU_ITEM_MODAL:
          _uiStates.menuItemModalHidden = true;
          UiStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
