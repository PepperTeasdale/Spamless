MenuSection = React.createClass({
  getInitialState: function () {
    return ({ menuItems: RestaurantStore.itemsByCategory(this.props.category) });
  },

  handleItemClick: function (e) {
    this.props.handleItemClick(e);
  },

  render: function () {
    var categoryItems = this.state.menuItems.map(function (item) {
      return (
        <div
          className="menu-item group"
          onClick={ this.handleItemClick }
          key={ item.id }
        >
          <h4>{ item.name }</h4>
          <div className="item-price">{ item.price }</div>
          <p>{ item.description }</p>
        </div>
      );
    });

    return (
      <div>
        <h3>{this.props.category}</h3>
        { categoryItems }
      </div>
    );
  }
});
