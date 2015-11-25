CuisineFilter = React.createClass({
  getInitialState: function () {
    return { checked: false };
  },

  handleChange: function (e) {
    this.setState({ checked: !this.state.checked });
    this.props.toggleFilter(e);
  },

  render: function () {
    return (
      <input
        type="checkbox"
        checked={ this.state.checked }
        value={this.props.value}
        onChange={ this.handleChange }
      >
        {this.props.value}
      </input>
  );
  }
});
