RestaurantDetail = React.createClass({
  getInitialState: function () {
    return {
      restaurant: RestaurantStore.find(parseInt(this.props.params.restaurantId)),
      menuCategories: []
    };
  },

  componentDidMount: function () {
    RestaurantStore.addChangeListener(this._onChange);
    ApiUtil.fetchSingleRestaurant(this.props.params.restaurantId);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      restaurant: RestaurantStore.find(parseInt(this.props.params.restaurantId)),
      menuCategories: RestaurantStore.menuCategories()
    });
  },

  render: function () {
    if (this.state.restaurant === undefined) { return <div></div>; }

    var categories = this.state.menuCategories.map(function (category) {
      return <h3 key={category}>{category}</h3>;
    });

    return (
      <div>
        <header className="restaurant-header">
          <h2>{this.state.restaurant.restaurant_detail.cuisine_type}</h2>
          <p>{this.state.restaurant.restaurant_detail.description}</p>
        </header>
        <section className="menu-section">
          <div className="category-title">
            {categories}
          </div>
        </section>
      </div>
    );
  }
});
