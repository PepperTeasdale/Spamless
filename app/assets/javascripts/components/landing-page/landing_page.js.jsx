LandingPage = React.createClass({
  render: function () {
    return (
      <div className="landing-page group">
        <h1 className="landing-page-header">
          Order delivery from 100% Spam-free local restaurants
        </h1>
        <Navbar landingPage={ true } />
        <SearchForm />
      </div>
    );
  }
});
