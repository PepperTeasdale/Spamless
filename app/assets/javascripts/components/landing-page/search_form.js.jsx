SearchForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var address = AddressStore.first();

    return {
      address: address,
      orderMethod: RestaurantStore.orderMethod(),
      query: ""
    };
  },

  changeAddress: function (e) {
    this.setState({ address: e.target.value });
  },

  componentDidMount: function () {
    RestaurantStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ orderMethod: RestaurantStore.orderMethod() });
  },

  submitSearch: function (e) {
    e.preventDefault();

    if (this.state.address) {
      var searchParams = {
        address: this.state.address,
        orderMethod: this.state.orderMethod,
      };

      if (this.state.query) { searchParams.query = this.state.query; }

      ApiUtil.fetchRestaurants(searchParams);
      this.history.pushState(null, '/restaurants');
    }
  },

  changeQuery: function (e) {
    this.setState({ query: e.target.value });
  },

  orderMethodChanged: function (e) {
    RestaurantActions.orderMethodChanged(e.target.name);
  },

  render: function () {
    var addressOptions;
    if (CurrentUserStore.isSignedIn()) {
      addressOptions = AddressStore.all().map(function (address) {
        return (
          <option
            key={ address.id }
            value={ address.full_street_address }
          />
        );
      });
    }

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
          list="address-datalist"
          placeholder="Where are you? (e.g. 598 Broadway, NY)"
          onChange={ this.changeAddress }
        />
        <datalist id="address-datalist">
          { addressOptions }
        </datalist>
        <input
          type="text"
          className="query-input"
          placeholder="What are you looking for? (optional)"
          onChange={ this.changeQuery }
        />
        <button onClick={ this.submitSearch }>
          Search
        </button>
      </form>
    );
  }
});
