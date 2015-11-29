RegistrationApiUtil = {
  signUp: function (registrationParams) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: registrationParams,
      success: function (currentUser) {
        AppDispatcher.dispatch({
          actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
          currentUser: currentUser
        });
        UiActions.closeAuthModal();
      },
      error: function (data) {
        UiActions.setFlash($.parseJSON(data.responseText).errors);
      }
    });
  }
};

// { user : { email : "justin@fakemail.com", fname: "justin", lname: "s", password: "12345678", password_confirmation: "12345678" } }
