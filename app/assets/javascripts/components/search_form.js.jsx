SearchForm = React.createClass({
  getInitialState: function () {
    return { address: "" };
  },

  changeAddress: function (e) {
    return this.setState({ address: e.target.value });
  },

  submitSearch: function () {
    ApiUtil.fetchRestaurants(this.state.address, this.props.redirect);
    this.props.redirect();
  },

  render: function () {
    return (
      <div className="search-form group">
        <h2>Check Out Restaurants Near You!</h2>
        <input
          type="text"
          className="address-input"
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
