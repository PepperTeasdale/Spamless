SearchIndex = React.createClass({
  render: function () {
    return (
      <div className="search-index group">
        <FilterForm />
        <RestaurantIndex />
      </div>
    );
  }
});
