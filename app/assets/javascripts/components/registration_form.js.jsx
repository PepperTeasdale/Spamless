RegistrationForm = React.createClass({
  submit: function (e) {
    e.preventDefault();

    var registrationParams = $(e.currentTarget).serializeJSON();
    RegistrationApiUtil.signUp(registrationParams);
  },

  render: function () {

    return (
      <form onSubmit={ this.submit }>

        <h1>Create Your Account</h1>

        <label>
          Your name
          <input type="text" name="fname" placeholder="First" />
        </label>

        <input type="text" name="lname" placeholder="Last" />

        <label>
          Email
          <input type="text" name="email" placeholder="Email" />
        </label>

        <label>
          Password
          <input type="password" name="password" placeholder="Password (8 character minimum)" />
        </label>

        <input type="password" name="password_confirmation" placeholder="Confirm your password" />


        <button>Create Your Account</button>
      </form>
    );
  }
});
