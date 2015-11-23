window.SessionsApiUtil = {
  signIn: function (credentials) {
    $.ajax({
      url: "/users/sign_in",
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
      url: "/users/sign_out",
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
