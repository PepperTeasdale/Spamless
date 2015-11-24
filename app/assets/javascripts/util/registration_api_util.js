RegistrationApiUtil = {
  signUp: function (registrationParams) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: registrationParams,
      success: function (currentUser) {
        debugger
        AppDispatcher.dispatch({
          actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
          currentUser: currentUser
        });
        UiActions.toggleAuthModal();
      },
      error: function (data) {
        debugger
        console.log(data);
      }
    });
  }
};

// { user : { email : "justin@fakemail.com", fname: "justin", lname: "s", password: "12345678", password_confirmation: "12345678" } }
