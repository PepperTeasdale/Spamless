window.FeaturedRestaurantCard = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({
      restaurantName: this.props.restaurant.name,
      restaurantId: this.props.restaurant.id,
      restaurantCuisine: this.props.restaurant.restaurant_detail.cuisine_type
    });
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      restaurantName: nextProps.restaurant.name,
      restaurantId: nextProps.restaurant.id,
      restaurantCuisine: nextProps.restaurant.restaurant_detail.cuisine_type
    });
  },

  redirect: function () {
    this.history.pushState(null, "/restaurants/" + this.state.restaurantId);
  },

  render: function () {
    return (
      <button
        className="featured-restaurant-card"
        onClick={ this.redirect }
      >
      <div className="restaurant-card-image-wrapper">
        <img
          className="featured-card-img"
          src={ this.props.restaurant.image_url }
        />
      </div>
      <h3>{ this.state.restaurantName }</h3>
      <small>{ this.state.restaurantCuisine || "Restaurant" }</small>
    </button>
    );
  }
});
