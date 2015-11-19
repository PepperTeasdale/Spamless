LandingPage = React.createClass({
  redirect: function (address) {
    this.props.history.pushState(null, "/restaurants", address);
  },

  render: function () {
    return (
      <div className="landing-page group">
        <Navbar landingPage={true} />
        <SearchForm redirect={this.redirect} />
      </div>
    );
  }
});
