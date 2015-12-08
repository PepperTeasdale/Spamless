RestaurantDetail = React.createClass({
  getInitialState: function () {
    return {
      restaurant: RestaurantStore.find(parseInt(this.props.params.restaurantId)),
      menuCategories: [],
      formType: "new"
    };
  },

  componentDidMount: function () {
    UiActions.openShoppingCart();
    RestaurantStore.addChangeHandler(this._onChange);
    ApiUtil.fetchSingleRestaurant(this.props.params.restaurantId);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeHandler(this._onChange);
    UiActions.closeShoppingCart();
  },

  _onChange: function () {
    this.setState({
      restaurant: RestaurantStore.find(parseInt(this.props.params.restaurantId)),
      menuCategories: RestaurantStore.menuCategories()
    });
  },

  redirect: function (address) {
    this.props.history.pushState(null, "/restaurants", address);
  },

  render: function () {
    var newItemButton;
    var menuItemModal;

    if (this.state.restaurant === undefined) { return <div></div>; }

    var categories = this.state.menuCategories.map(function (category) {
      return (
        <MenuSection
          category={ category }
          key={ category }
        />
      );
    });

    if (CurrentUserStore.currentUser().id === RestaurantStore.currentRestaurant().user_id) {
      newItemButton = <button onClick={ UiActions.openNewItemForm }>Add Menu Item</button>;
      menuItemModal = (
        <MenuItemModal
          restaurant={ this.state.restaurant }
          formType={ this.state.formType }
        />
      );
    }

    debugger

    return (
      <div>
        <Navbar redirect={ this.redirect } />
        <section className="restaurant-detail">
          { menuItemModal }
          <header className="restaurant-header group">
            <ReactRouter.Link to="/restaurants">Back</ReactRouter.Link>
              <img
                className="restaurant-photo"
                src={ this.state.restaurant.image_url }
              />
            <div className="restaurant-info">
              <h2>{this.state.restaurant.name}</h2>
              { newItemButton }
              <h3>{this.state.restaurant.restaurant_detail.cuisine_type}</h3>
              <p>{this.state.restaurant.restaurant_detail.description}</p>
              <p>{this.state.restaurant.address.full_street_address}</p>
            </div>
          </header>

          <section className="menu-section group">
            {categories}
          </section>
        </section>
      </div>
    );
  }
});
