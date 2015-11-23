window.AuthModal = React.createClass({
  getInitialState: function () {
    return ({
      signIn: true,
      hidden: true
    });
  },

  componentDidMount: function () {
    UiStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    UiStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ hidden: UiStore.authModalHidden() });
  },

  hide: function () {
    UiActions.toggleAuthModal();
  },

  formTypeChanged: function () {
    this.setState({ signIn: !this.state.signIn });
  },

  render: function () {
    var form, buttonText;
    if (this.state.signIn) {
      form = <SessionForm />;
      buttonText = "Sign Up";
    } else {
      form = <RegistrationForm />;
      buttonText = "Sign In";
    }

    var hidden = (this.state.hidden ? " hidden" : "");

    return (
      <div className={ "auth-modal group" + hidden }>
        <button
          className="toggle-form"
          onClick={ this.formTypeChanged }
        >
          { buttonText }
        </button>
        <button className="hide-modal" onClick={ this.hide }>
          X
        </button>
        { form }
      </div>
    );
  }
});
