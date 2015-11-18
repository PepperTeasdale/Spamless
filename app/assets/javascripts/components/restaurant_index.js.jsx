RestaurantIndex = React.createClass({
  getInitialState: function () {
    return { restaurants: RestaurantStore.all() };
  },

  componentDidMount: function () {
    RestaurantStore.addChangeListener(this._onChange);
    ApiUtil.fetchRestaurants();
  },

  _onChange: function () {
    this.setState({ restaurants: RestaurantStore.all() });
  },

  render: function () {
    var restaurants = this.state.restaurants.map(function (restaurant) {
      var Link = ReactRouter.Link;
      return (
        <li className="restaurant-card" key={restaurant.id}>
          <Link to={"/restaurants/" + restaurant.id}>{restaurant.name}</Link>
          <p>{restaurant.restaurant_detail.cuisine_type}</p>
        </li>
      );
    });

    return (
      <div>
        <ul className="restaurant-list">
          {restaurants}
        </ul>
      </div>
    );
  }
});
