RestaurantDetail = React.createClass({
  getInitialState: function () {
    return {
      restaurant: RestaurantStore.find(this.props.params.restaurantId)
    };
  },

  componentDidMount: function () {
    debugger
    this.setState({
      restaurant: RestaurantStore.find(this.props.params.restaurantId)
    });
  },

  render: function () {
    return (
      <div className="restaurant-header">
        <h2>{this.state.restaurant.cuisine}</h2>
        <p>{this.state.restaurant.description}</p>
      </div>
    );
  }
});
