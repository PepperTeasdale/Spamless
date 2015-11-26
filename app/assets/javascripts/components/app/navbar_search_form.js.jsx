NavbarSearchForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      address: CurrentAddressStore.currentAddress(),
      orderMethod: RestaurantStore.orderMethod()
    };
  },

  componentDidMount: function () {
    CurrentAddressStore.addChangeHandler(this._onChange);
    RestaurantStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    CurrentAddressStore.removeChangeHandler(this._onChange);
    RestaurantStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      address: CurrentAddressStore.currentAddress(),
      orderMethod: RestaurantStore.orderMethod()
    });
  },

  changeAddress: function (e) {
    return this.setState({ address: e.target.value });
  },

  submitSearch: function (e) {
    e.preventDefault();

    if (this.state.address) {
      var searchParams = {
        address: this.state.address,
        orderMethod: this.state.orderMethod
      };
      ApiUtil.fetchRestaurants(searchParams);
      this.history.pushState(null, '/restaurants');
    }
  },

  orderMethodChanged: function (e) {
    RestaurantActions.orderMethodChanged(e.target.name);
  },

  render: function () {
    return (
      <form className="navbar-search-form group" onSubmit={ this.submitSearch }>
        <fieldset className="navbar-radios group">
          <label className="navbar-radio-label">
            <input
              id="delivery"
              type="radio"
              name="delivery"
              checked={ this.state.orderMethod === "delivery" }
              onChange={ this.orderMethodChanged }
            />
            <span>Delivery</span>
          </label>
          <span className="navbar-span">-or-</span>
          <label className="navbar-radio-label">
            <input
              id="pickup"
              type="radio"
              name="pickup"
              checked={ this.state.orderMethod === "pickup" }
              onChange={ this.orderMethodChanged }
            />
            <span>Pickup</span>
          </label>
        </fieldset>
        <input
          type="text"
          className="nav-bar-address-input"
          value={ this.state.address }
          onChange={ this.changeAddress }
        />
        <button onClick={ this.submitSearch }>
          Search
        </button>
      </form>
    );
  }
});
