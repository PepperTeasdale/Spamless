window.SessionForm = React.createClass({
  // mixins: [React.addOns.LinkedStateMixIn],

  getInitialState: function () {
    return (
      email: "",
      password: ""
    );
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

  render: function () {
    return (
      <form>
        <label>
          Email
          <input type="text" valueLink={ this.state.email } />
        </label>

        <label>
          Password
          <input type="password" valueLink={ this.state.password } />
        </label>

        <button onClick={ this.signIn }>Sign In</button>
      </form>
    );
  }
});
