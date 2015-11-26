window.UiActions = {
  toggleAuthModal: function () {
    AppDispatcher.dispatch({
      actionType: UiConstants.TOGGLE_AUTH_MODAL
    });
  },

  setFlash: function (messages) {
    AppDispatcher.dispatch({
      actionType: UiConstants.SET_FLASH,
      messages: messages
    });
  },

  toggleProfileDropdown: function () {
    AppDispatcher.dispatch({
      actionType: UiConstants.TOGGLE_PROFILE_DROP_DOWN
    });
  },

  closeProfileDropdown: function () {
    AppDispatcher.dispatch({
      actionType: UiConstants.CLOSE_PROFILE_DROP_DOWN
    });
  },

  closeShoppingCart: function () {
    AppDispatcher.dispatch({
      actionType: UiConstants.CLOSE_SHOPPING_CART
    });
  },

  openShoppingCart: function () {
    AppDispatcher.dispatch({
      actionType: UiConstants.OPEN_SHOPPING_CART
    });
  },

  toggleShoppingCart: function () {
    AppDispatcher.dispatch({
      actionType: UiConstants.TOGGLE_SHOPPING_CART
    });
  }
};
