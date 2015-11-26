NavBarLinkList = React.createClass({
  getInitialState: function () {
    return ({ profileButton: CurrentUserStore.isSignedIn() });
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ profileButton: CurrentUserStore.isSignedIn() });
  },

  render: function () {
    var Link = ReactRouter.Link;
    var authLink;

    if (this.state.profileButton) {
      authButtons = (
          <li className="navbar-button">
            <button onClick={ UiActions.toggleProfileDropdown }>
              { "Hi, " + CurrentUserStore.currentUser().fname + "! ∨" }
            </button>
            <ProfileDropDown />
          </li>
      );
    } else {
      authButtons = (
        <li className="navbar-button">
          <button onClick={ UiActions.toggleAuthModal }>Sign In</button>
        </li>
      );
    }


    return (
      <ul className="navbar-button-list">
        { authButtons }
        <li className="navbar-button">
          <button onClick={ UiActions.toggleShoppingCart }>
            Shopping Cart
          </button>
        </li>
      </ul>
    );
  }
});
