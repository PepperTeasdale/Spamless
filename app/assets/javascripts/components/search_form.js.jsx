SearchForm = React.createClass({
  render: function () {
    Link = ReactRouter.Link;

    return (
      <div className="search-form group">
        <Link to="/api/restaurants">
          Find Restaurants Near You!
        </Link>
      </div>
    );
  }
});
