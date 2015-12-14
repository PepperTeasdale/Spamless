RestaurantIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {
      restaurants: RestaurantStore.paginate(10),
      filters: FilterStore.all(),
      page: RestaurantStore.page()
    };
  },

  componentDidMount: function () {
    RestaurantStore.addChangeHandler(this._onChange);
    FilterStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeHandler(this._onChange);
    FilterStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({
      restaurants: RestaurantStore.paginate(10),
      filters: FilterStore.all(),
      page: RestaurantStore.page()
    });
  },

  render: function () {
    var restaurants = this.state.restaurants.map(function (restaurant) {
      var Link = ReactRouter.Link;

      return (
        <li className="restaurant-card" key={ restaurant.id }>
          <Link to={ "/restaurants/" + restaurant.id } className="group">
            <img
              className="restaurant-card-img"
              src={ restaurant.image_url }
            />
            <h3>{ restaurant.name }</h3>
            <p>{ restaurant.cuisine_type }</p>
          </Link>
        </li>
      );
    });

    var numPages = Math.ceil(RestaurantStore.filteredRestaurants().length / 10);

    return (
      <div>
        <ul className="restaurant-list">
          <li>
            <small>
              { "Displaying page " + this.state.page + " of " + numPages }
            </small>
          </li>
          { restaurants }
        </ul>
      </div>
    );
  }
});
