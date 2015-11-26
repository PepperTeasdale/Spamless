SearchIndex = React.createClass({
  render: function () {
    return (
      <div className="search-index group">
        <Navbar />
        <FilterForm />
        <RestaurantIndex />
      </div>
    );
  }
});
