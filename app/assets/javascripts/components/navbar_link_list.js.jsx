NavBarLinkList = React.createClass({
  getInitialState: function () {
    return ({ signOutButton: false });
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
    e.preventDefault();
    $(document).find(".shopping-cart").toggleClass("hidden");
  },

  showAuth: function (e) {
    UiActions.toggleAuthModal();
  },

  render: function () {
    var Link = ReactRouter.Link;
    var authLink;

    if (this.state.signOutButton) {
      authLink = (
        <li className="navbar-link">
          <Link to="" onClick={ SessionsApiUtil.signOut }>Sign Out</Link>
        </li>
      );
    } else {
      authLink = (
        <li className="navbar-link">
          <Link
            to=""
            onClick={ this.showAuth }
          >
            Sign In
          </Link>
        </li>
      );
    }


    return (
      <ul className="navbar-link-list">
        { authLink }
        <li className="navbar-link">
          <Link to="" onClick={ this.toggleShoppingCart }>Shopping Cart</Link>
        </li>
      </ul>
    );
  }
});
