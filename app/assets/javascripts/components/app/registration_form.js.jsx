RegistrationForm = React.createClass({
  mixins: [React.addons.LinkedStateMixIn],

  getInitialState: function () {
    return ({
      fname: "",
      lname: "",
      email: "",
      password: "",
    });
  },

  submit: function (e) {
    e.preventDefault();

    var registrationParams = {
      user: {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.password,
      }
    };

    RegistrationApiUtil.signUp(registrationParams);
  },

  fnameChanged: function (e) {
    this.setState({ fname: e.target.value });
  },

  lnameChanged: function (e) {
    this.setState({ lname: e.target.value });
  },

  emailChanged: function (e) {
    this.setState({ email: e.target.value });
  },

  passwordChanged: function (e) {
    this.setState({ password: e.target.value });
  },


  render: function () {

    return (
      <div>
        <h1>Create Your Account</h1>

        <form className="auth-form group">
          <section className="name-field">
            <span>Your name</span>
              <input
                type="text"
                name="fname"
                className="registration-name"
                placeholder="First"
                onChange={ this.fnameChanged }
             />


            <input
              type="text"
              name="lname"
              className="registration-name"
              placeholder="Last"
              onChange={ this.lnameChanged }
            />
        </section>

          <span>Email</span>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={ this.emailChanged }
            />


          <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Password (8 character minimum)"
              onChange={ this.passwordChanged }
            />

          <div className="signin-button-wrapper">
            <button
              className="signin-button"
              onClick={ this.submit }
            >
              Create Your Account
            </button>
          </div>
        </form>
      </div>
    );
  }
});
