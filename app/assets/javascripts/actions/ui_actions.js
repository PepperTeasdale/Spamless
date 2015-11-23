window.UiActions = {
  toggleAuthModal: function () {
    AppDispatcher.dispatch({
      actionType: UiConstants.TOGGLE_AUTH_MODAL
    });
  }
};
