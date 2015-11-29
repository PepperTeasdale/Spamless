window.UserRestaurantsIndex = React.createClass({
  getInitialState: function () {
    return ({ restaurants: CurrentUserStore.allRestaurants() });
  },

  componentDidMount: function () {
    RestaurantsApiUtil.fetchManagedRestaurants(CurrentUserStore.currentUser().id);
    CurrentUserStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ restaurants: CurrentUserStore.allRestaurants() });
  },

  render: function () {
    var Link = ReactRouter.Link;
    var restaurants = this.state.restaurants.map(function (restaurant) {
      return (
        <li className="user-profile-index-item group" key={restaurant.id}>
          <img
            className="restaurant-photo"
            src="http://lorempixel.com/150/150/food"
          />
          <Link
            to={ "/restaurants/" + restaurant.id }
            className="order-item-restaurant-link"
          >
            {order.restaurant.name}
          </Link>
        </li>
      );
    });

    return (
      <div className="managed-restaurants-index">
        <h1 className="user-profile-index-header">YOUR RESTAURANTS</h1>
        <Link to="/restaurants/new">Create New Restaurant</Link>
        <ul>
          { restaurants }
        </ul>
      </div>
    );
  }
});
