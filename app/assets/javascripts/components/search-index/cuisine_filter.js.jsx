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
      <div className="filter-container">
        <input
          type="checkbox"
          checked={ this.state.checked }
          value={ this.props.value }
          onChange={ this.handleChange }
        />
        <span>{ this.props.value }</span>
        <small>{ this.props.qty }</small>
      </div>
    );
  }
});
