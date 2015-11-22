RegistrationApiUtil = {
  signUp: function (registrationParams) {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader(
          'X-CSRF-Token',
          $('meta[name="csrf-token"]').attr('content'))
      },
      data: registrationParams,
      success: function (data) {
        debugger
      },
      error: function (data) {
        debugger
      }
    });
  }
};

// { user : { email : "justin@fakemail.com", fname: "justin", lname: "s", password: "12345678", password_confirmation: "12345678" } }
