LandingPage = React.createClass({
  getInitialState: function () {
    return ({
      featuredRestaurants: RestaurantStore.featuredRestaurants(4)
    });
  },

  componentDidMount: function () {
    RestaurantStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({
      featuredRestaurants: RestaurantStore.featuredRestaurants(4)
    });
  },

  render: function () {
    var restaurantCards = this.state.featuredRestaurants.map(function (restaurant) {
      return (
        <FeaturedRestaurantCard
          key={ restaurant.id }
          restaurant={ restaurant }
        />
      );
    });

    return (
      <div className="landing-page group">
        <h1 className="landing-page-header">
          Order delivery from 100% Spam-free local restaurants
        </h1>
        <Navbar landingPage={ true } />
        <SearchForm />
        <section className="filler-light">
          <h2>Restaurants Near You!</h2>
          { restaurantCards }
        </section>
        <section className="filler-dark"></section>
      </div>
    );
  }
});
