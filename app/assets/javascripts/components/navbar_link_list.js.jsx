NavBarLinkList = React.createClass({
  getInitialState: function () {
    return ({ signOutButton: CurrentUserStore.isSignedIn() });
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ signOutButton: CurrentUserStore.isSignedIn() });
  },

  toggleShoppingCart: function (e) {
    $(document).find(".shopping-cart").toggleClass("hidden");
  },

  showAuth: function (e) {
    UiActions.toggleAuthModal();
  },

  render: function () {
    var Link = ReactRouter.Link;
    var authLink;

    if (this.state.signOutButton) {
      authButtons = (
          <li className="navbar-button">
            <button onClick={ UiActions.showProfileDropDown }>
              { "Hi, " + CurrentUserStore.currentUser().fname + "! ∨" }
            </button>
            <ProfileDropDown />
          </li>
      );
    } else {
      authButtons = (
        <li className="navbar-button">
          <button onClick={ this.showAuth }>Sign In</button>
        </li>
      );
    }


    return (
      <ul className="navbar-button-list">
        { authButtons }
        <li className="navbar-button">
          <button onClick={ this.toggleShoppingCart }>Shopping Cart</button>
        </li>
      </ul>
    );
  }
});
