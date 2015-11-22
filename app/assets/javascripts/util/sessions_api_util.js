window.SessionsApiUtil = {
  signIn: function (credentials) {
    $.ajax({
      url: "/users/sign_in",
      type: "POST",
      beforeSend: function(xhr) {
        xhr.setRequestHeader(
          'X-CSRF-Token',
          $('meta[name="csrf-token"]').attr('content'))
      },
      data: credentials,
      dataType: "json",
      success: function (currentUser) {
        AppDispatcher.dispatch({
          actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
          currentUser: currentUser
        });
      }
    });
  },

  signOut: function () {
    $.ajax({
      url: "/users/sign_out",
      type: "DELETE",
      beforeSend: function(xhr) {
        xhr.setRequestHeader(
          'X-CSRF-Token',
          $('meta[name="csrf-token"]').attr('content'))
      },
      success: function () { console.log("signed out!") } })
  }
}
