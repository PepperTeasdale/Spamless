var FilterForm = React.createClass({
  getInitialState: function () {
    return ({
      filters: ["German"]
    });
  },

  render: function () {
    return (
      <div>
        <fieldset></fieldset>
        <RestaurantIndex filters={ this.state.filters } />;
      </div>
    );
  }
});
