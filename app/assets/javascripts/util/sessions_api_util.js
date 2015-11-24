window.SessionsApiUtil = {
  signIn: function (credentials) {
    debugger
    $.ajax({
      url: "api/session",
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function (currentUser) {
        AppDispatcher.dispatch({
          actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
          currentUser: currentUser
        });
        UiActions.toggleAuthModal();
      }
    });
  },

  signOut: function () {
    $.ajax({
      url: "api/session",
      type: "DELETE",
      success: function (data) {
        AppDispatcher.dispatch({
          actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
          currentUser: {}
        });
      }
    });
  }
};
