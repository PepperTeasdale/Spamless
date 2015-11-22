RegistrationApiUtil = {
  signUp: function (registrationParams) {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'json',
      data: registrationParams,
      success: function () {
        console.log("Successfully signed up!");
      }
    });
  }
};

// { user : { email : "justin@fakemail.com", fname: "justin", lname: "s", password: "12345678", password_confirmation: "12345678" } }
