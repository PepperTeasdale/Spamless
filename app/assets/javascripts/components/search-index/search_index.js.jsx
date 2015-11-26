SearchIndex = React.createClass({
  componentDidMount: function () {
    CurrentAddressActions.receiveCurrentAddress(this.props.location.query.address);
  },
  
  render: function () {
    return (
      <div className="search-index group">
        <Navbar redirect={ this.redirect } />
        <FilterForm />
        <RestaurantIndex />
      </div>
    );
  }
});
