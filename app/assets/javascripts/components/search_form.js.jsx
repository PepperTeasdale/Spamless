SearchForm = React.createClass({
  render: function () {
    Link = ReactRouter.Link;

    return (
      <div className="search-form group">
        <div className="button-wrapper">
          <Link to="/restaurants">
            Find Restaurants Near You!
          </Link>
        </div>
      </div>
    );
  }
});
