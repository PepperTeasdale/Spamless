Navbar = React.createClass({
  render: function () {
    return (
      <div className="navbar-container">
        <nav className="navbar group">
          <ReactRouter.Link to="/" className="logo">Spamless</ReactRouter.Link>
          <NavBarLinkList />
        </nav>
      </div>
    );
  }
});
