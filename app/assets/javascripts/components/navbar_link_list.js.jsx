NavBarLinkList = React.createClass({
  toggleShoppingCart: function (e) {
    e.preventDefault();
    $(document).find(".shopping-cart").toggleClass("hidden");
  },

  render: function () {
    var Link = ReactRouter.Link;

    return (
      <ul className="navbar-link-list">
        <li className="navbar-link">
          <Link to="/users/sign_in">Sign In</Link>
        </li>
        <li className="navbar-link">
          <Link to="/users/sign_up">Sign Up</Link>
        </li>
        <li className="navbar-link">
          <Link to="" onClick={ this.toggleShoppingCart }>Shopping Cart</Link>
        </li>
      </ul>
    );
  }
});
