var MenuSection = React.createClass({
  getInitialState: function () {
    return ({
      menuItems: RestaurantStore.itemsByCategory(this.props.category)
    });
  },

  componentDidMount: function () {
    RestaurantStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({
      menuItems: RestaurantStore.itemsByCategory(this.props.category)
    });
  },

  render: function () {
    var itemPairs = [];
    var menuItems = this.state.menuItems

    for (var i = 0; i < menuItems.length; i += 2) {
      itemPairs.push([menuItems[i], menuItems[i + 1]]);
    }

    var categoryItems = itemPairs.map(function (pair, i) {
      var componentPair = pair.map(function (item, j) {
        if (item) {
          return <MenuItem item={ item } key={ item.id } column={ j + 1 } />;
        } else {
          return  (
            <div
              key="placeholder"
              className={ "menu-item column-" + (j + 1) }
            >
            </div>
          );
        }
      });

      return (
        <div className="outer-row-container group" key={ i }>
          <div className="inner-row-container group">
            { componentPair }
          </div>
        </div>
      )
    }.bind(this));


    return (
      <div className="menu-category-section">
        <h3>{ this.props.category }</h3>
        <div className="menu-items-container group">
          { categoryItems }
        </div>
      </div>
    );
  }
});
