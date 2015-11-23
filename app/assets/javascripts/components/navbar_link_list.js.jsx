NavBarLinkList = React.createClass({
  toggleShoppingCart: function (e) {
    e.preventDefault();
    $(document).find(".shopping-cart").toggleClass("hidden");
  },

  showAuth: function (e) {
    UiActions.toggleAuthModal();
  },

  render: function () {
    var Link = ReactRouter.Link;

    return (
      <ul className="navbar-link-list">
        <li className="navbar-link">
          <Link to="" onClick={ this.showAuth }>Sign In</Link>
        </li>

        <li className="navbar-link">
          <Link to="" onClick={ this.toggleShoppingCart }>Shopping Cart</Link>
        </li>
      </ul>
    );
  }
});
