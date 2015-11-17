NavBarLinkList = React.createClass({
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
          <Link to="/users/sign_out">Sign Out</Link>
        </li>
      </ul>
    );
  }
});
