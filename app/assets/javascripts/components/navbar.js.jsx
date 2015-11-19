Navbar = React.createClass({
  componentDidMount: function () {
    if (this.props.landingPage) {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 25) {
          $(".navbar").addClass("not-transparent");
          $(".navbar a").addClass("small-logo");
        }
        else {
          $(".navbar").removeClass("not-transparent");
          $(".logo").removeClass("small-logo");
        }
      });
    }
    else {
      $(".navbar").addClass("not-transparent");
      $(".navbar a").addClass("small-logo");
    }
  },

  render: function () {
    return (
      <div className="navbar-container">
        <nav className="navbar group">
          <ReactRouter.Link to="/" className="logo" />
          <NavBarLinkList />
        </nav>
      </div>
    );
  }
});
