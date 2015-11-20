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

  handleItemClick: function (e) {
    debugger
    console.log(e);
  },

  render: function () {
    if (this.state.restaurant === undefined) { return <div></div>; }

    var categories = this.state.menuCategories.map(function (category) {
      return (
        <MenuSection
          category={ category }
          handleItemClick={ this.handleItemClick }
          key={ category }
        />
      );
    });
    debugger
    return (
      <div>
        <Navbar />
        <header className="restaurant-header group">
          <ReactRouter.Link to="/restaurants">Back</ReactRouter.Link>
          <div className="restaurant-info">
            <h2>{this.state.restaurant.name}</h2>
            <h3>{this.state.restaurant.restaurant_detail.cuisine_type}</h3>
            <p>{this.state.restaurant.restaurant_detail.description}</p>
            <p>{this.state.restaurant.address.full_street_address}</p>
          </div>
        </header>
        <section className="menu-section">
          {categories}
        </section>
      </div>
    );
  }
});
