LandingPage = React.createClass({
  redirect: function () {
    this.props.history.pushState(null, "/restaurants", {});
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
