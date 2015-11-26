SearchForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      address: CurrentAddressStore.currentAddress(),
      orderMethod: RestaurantStore.orderMethod()
    };
  },

  changeAddress: function (e) {
    return this.setState({ address: e.target.value });
  },

  componentDidMount: function () {
    RestaurantStore.addChangeListener(this._onChange);
  },

  componentWilUnmount: function () {
    RestaurantStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ orderMethod: RestaurantStore.orderMethod() });
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
      <form className="search-form group" onSubmit={ this.submitSearch }>
        <h2>Check Out Restaurants Near You!</h2>
        <fieldset className="group">
          <label className="radio-label">
            <input
              id="delivery"
              type="radio"
              name="delivery"
              checked={ this.state.orderMethod === "delivery" }
              onChange={ this.orderMethodChanged }
            />
            <span>Delivery</span>
          </label>
          <span>-or-</span>
          <label className="radio-label">
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
          className="address-input"
          placeholder="Where are you? (e.g. 598 Broadway, NY)"
          onChange={ this.changeAddress }
        />
        <button onClick={ this.submitSearch }>
          Search
        </button>
      </form>
    );
  }
});
