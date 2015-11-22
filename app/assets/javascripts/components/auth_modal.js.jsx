window.AuthModal = React.createClass({
  getInitialState: function () {
    return ({ signIn: true });
  },

  formTypeChanged: function () {
    this.setState({ signIn: !this.state.signIn });
  },

  render: function () {
    var form = (this.state.signIn ? <SessionForm /> : <RegistrationForm />);

    return (
      <div className="auth-modal">
        <fieldset className="group">
          <label className="radio-label">
            <input
              id="sign-up"
              type="radio"
              name="sign-up"
              checked={ this.state.signIn === false }
              onChange={ this.formTypeChanged }
            />
          <span>Sign Up</span>
          </label>
          <span>-or-</span>
          <label className="radio-label">
            <input
              id="sign-in"
              type="radio"
              name="sign-in"
              checked={ this.state.signIn === true }
              onChange={ this.formTypeChanged }
            />
          <span>Sign In</span>
          </label>
        </fieldset>
        { form }
      </div>
    )
  }
});
