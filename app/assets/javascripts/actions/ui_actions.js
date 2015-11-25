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

  showProfileDropDown: function () {
    AppDispatcher.dispatch({
      actionType: UiConstants.TOGGLE_PROFILE_DROP_DOWN
    });
  }
};
