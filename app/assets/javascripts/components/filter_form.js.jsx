var FilterForm = React.createClass({
  getInitialState: function () {
    return ({
      filterOptions: RestaurantStore.cuisineTypes()
    });
  },

  componentDidMount: function () {
    RestaurantStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ filterOptions: RestaurantStore.cuisineTypes() });
  },

  render: function () {
    var cuisineTypes = this.state.filterOptions.map(function (cuisine) {
      return (
        <li key={cuisine}>
          <input type="checkbox" value={cuisine}>{cuisine}</input>
        </li>
      );
    });

    return (
      <div>
        <fieldset className="filter-field">
          <h3>Filter Cuisine Type</h3>
          <ul>
            {cuisineTypes}
          </ul>
        </fieldset>
      </div>
    );
  }
});
