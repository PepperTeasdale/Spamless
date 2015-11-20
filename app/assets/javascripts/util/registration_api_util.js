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
