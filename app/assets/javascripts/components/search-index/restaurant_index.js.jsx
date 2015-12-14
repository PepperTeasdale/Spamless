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

  changePage: function (e) {
    if (e.target.innerText == "Next") {
      RestaurantActions.changePage(1);
    } else {
      RestaurantActions.changePage(-1);
    }
  },

  render: function () {
    var previous, next;

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
            <p>{ restaurant.restaurant_detail.cuisine_type }</p>
          </Link>
        </li>
      );
    });

    var numPages = Math.ceil(RestaurantStore.filteredRestaurants().length / 10);

    if (this.state.page > 1) {
      previous = <button onClick={ this.changePage }>Previous</button>;
    }
    if (this.state.page < numPages) {
      next = <button onClick={ this.changePage }>Next</button>;
    }

    return (
      <div>
        <ul className="restaurant-list">
          <li className="restaurant-list-header">
            <small>
              { "Displaying page " + this.state.page + " of " + numPages }
            </small>
            { previous }
            { next }
          </li>
          { restaurants }
        </ul>
      </div>
    );
  }
});
