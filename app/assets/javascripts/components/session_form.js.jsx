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
      user: {
        email: this.state.email,
        password: this.state.password
      }
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
      <form>
        <label>
          Email
          <input type="text" onChange={ this.emailChanged } />
        </label>

        <label>
          Password
          <input type="password" onChange={ this.passwordChanged } />
        </label>

        <button onClick={ this.signIn }>Sign In</button>
      </form>
    );
  }
});
