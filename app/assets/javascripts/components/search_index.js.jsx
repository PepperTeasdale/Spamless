SearchIndex = React.createClass({
  render: function () {

    return (
      <div className="search-index group">
        <Navbar address={this.props.location.query.address} />
        <FilterForm />
        <RestaurantIndex />
      </div>
    );
  }
});
