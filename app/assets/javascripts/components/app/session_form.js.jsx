window.SessionForm = React.createClass({
  getInitialState: function () {
    return ({
      email: "",
      password: ""
    });
  },

  signIn: function (e) {
    e.preventDefault();
    SessionsApiUtil.signIn({
      email: this.state.email,
      password: this.state.password
    });
  },

  guestSignIn: function (e) {
    e.preventDefault();
    SessionsApiUtil.signIn({
      email: "cleese@pythons.com",
      password: "password"
    });
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
        <h1>Sign In</h1>
        <form className="auth-form group">
          <span>Email</span>
          <input
            type="text"
            onChange={ this.emailChanged }
            placeholder="Your email"
          />

          <span>Password</span>
          <input
            type="password"
            onChange={ this.passwordChanged }
            placeholder="Your password"
          />
          <div className="signin-button-wrapper">
            <button
              onClick={ this.signIn }
              className="signin-button"
            >
              Sign In
            </button>
            <button
              onClick={ this.guestSignIn }
              className="signin-button"
            >
              Sign In As Guest
            </button>
          </div>
        </form>
      </div>
    );
  }
});
