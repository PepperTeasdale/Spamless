var FilterForm = React.createClass({
  getInitialState: function () {
    return ({
      filterOptions: RestaurantStore.cuisineTypes(),
      cuisines: []
    });
  },

  componentDidMount: function () {
    RestaurantStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ filterOptions: RestaurantStore.cuisineTypes() });
  },

  toggleFilter: function (e) {
    var newCuisines = this.state.cuisines.slice(0);
    if (newCuisines.indexOf(e.target.value) === -1) {
      newCuisines.push(e.target.value);
    } else {
      newCuisines.splice(newCuisines.indexOf(e.target.value), 1);
    }

    this.setState({ cuisines: newCuisines });
    FilterActions.updateCuisines(newCuisines);
  },

  render: function () {
    var cuisineTypes = this.state.filterOptions.map(function (cuisine) {
      return (
        <li key={cuisine}>
          <CuisineFilter
            toggleFilter={ this.toggleFilter }
            value={ cuisine }
            qty={ RestaurantStore.countByCuisine(cuisine) }
          />
        </li>
      );
    }.bind(this));

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
