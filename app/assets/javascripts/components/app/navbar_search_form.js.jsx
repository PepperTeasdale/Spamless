NavbarSearchForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      address: CurrentAddressStore.currentAddress(),
      orderMethod: RestaurantStore.orderMethod(),
      query: ""
    };
  },

  componentDidMount: function () {
    CurrentAddressStore.addChangeHandler(this._onChange);
    RestaurantStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    CurrentAddressStore.removeChangeHandler(this._onChange);
    RestaurantStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({
      address: CurrentAddressStore.currentAddress(),
      orderMethod: RestaurantStore.orderMethod()
    });
  },

  changeAddress: function (e) {
    this.setState({ address: e.target.value });
  },

  changeQuery: function (e) {
    this.setState({ query: e.target.value });
  },

  submitSearch: function (e) {
    e.preventDefault();

    if (this.state.address) {
      var searchParams = {
        address: this.state.address,
        orderMethod: this.state.orderMethod
      };

      if (this.state.query) { searchParams.query = this.state.query; }

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
          placeholder="Address"
        />
        <input
          type="text"
          className="nav-bar-query-input"
          value={ this.state.query }
          onChange={ this.changeQuery }
          placeholder="What do you want? (optional)"
        />
        <button onClick={ this.submitSearch }>
          Search
        </button>
      </form>
    );
  }
});
