Navbar = React.createClass({
  getInitialState: function () {
    return ({ visible: !this.props.landingPage });
  },

  componentDidMount: function () {
    $(window).on("scroll", this.handleScroll);
  },

  handleScroll: function () {
    if (this.props.landingPage) {
      if ($(window).scrollTop() > 25) {
        this.setState({ visible: true });
      } else {
        this.setState({ visible: false });
      }
    }
  },

  componentWillUnmount: function () {
    $(window).off("scroll", this.handleScroll);
  },

  render: function () {
    var searchForm;
    var navClass = "";
    var logoClass = "";
    if (!this.props.landingPage) {
      searchForm = <NavbarSearchForm address={ CurrentAddressStore.currentAddress() } redirect={ this.props.redirect } />;
    }

    if (this.state.visible) {
      navClass = " not-transparent";
      logoClass = " small-logo";
    }

    return (
      <div className="navbar-container">
        <nav className={ "navbar group" + navClass }>
          <ReactRouter.Link to="/" className={ "logo" + logoClass } />
          { searchForm }
          <NavBarLinkList />
        </nav>
      </div>
    );
  }
});