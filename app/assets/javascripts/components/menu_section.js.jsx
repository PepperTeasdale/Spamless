var MenuSection = React.createClass({
  getInitialState: function () {
    return ({ menuItems: RestaurantStore.itemsByCategory(this.props.category) });
  },

  render: function () {
    var categoryItems = this.state.menuItems.map(function (item) {
      return <MenuItem item={ item } key={ item.id } />;
    }.bind(this));

    if (categoryItems.length % 2 !== 0) {
      categoryItems.push(<div className="menu-item"></div>);
    }

    return (
      <div className="menu-category-section">
        <h3>{this.props.category}</h3>
        <div className="menu-items-container group">
          { categoryItems }
        </div>
      </div>
    );
  }
});
