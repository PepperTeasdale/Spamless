NavbarSearchForm = React.createClass({
  getInitialState: function () {
    return {
      address: "",
      orderMethod: "delivery"
    };
  },

  changeAddress: function (e) {
    return this.setState({ address: e.target.value });
  },

  submitSearch: function () {
    if (this.state.address) {
      var searchParams = {
        address: this.state.address,
        orderMethod: this.state.orderMethod
      };

      ApiUtil.fetchRestaurants(searchParams);
      this.props.redirect();
    }
  },

  render: function () {
    return (
      <div className="navbar-search-form group">
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
          placeholder="Where are you? (Required)"
          onChange={ this.changeAddress }
        />
        <button onClick={ this.submitSearch }>
          Search
        </button>
      </div>
    );
  }
});
