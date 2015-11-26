RestaurantIndex = React.createClass({
  getInitialState: function () {
    return {
      restaurants: RestaurantStore.all(),
      filters: FilterStore.all()
    };
  },

  componentDidMount: function () {
    RestaurantStore.addChangeListener(this._onChange);
    FilterStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeListener(this._onChange);
    FilterStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      restaurants: RestaurantStore.all(),
      filters: FilterStore.all()
    });
  },

  render: function () {
    debugger
    var restaurants = this.state.restaurants.map(function (restaurant) {
      var cuisine = restaurant.restaurant_detail.cuisine_type;
      if (this.state.filters.cuisines.length === 0 ||
          this.state.filters.cuisines.indexOf(cuisine) !== -1) {

        var Link = ReactRouter.Link;
        return (
          <li className="restaurant-card" key={restaurant.id}>
            <Link to={"/restaurants/" + restaurant.id}>{restaurant.name}</Link>
            <p>{cuisine}</p>
          </li>
        );
      }
    }.bind(this));

    return (
      <div>
        <ul className="restaurant-list">
          {restaurants}
        </ul>
      </div>
    );
  }
});
