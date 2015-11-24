window.MenuItem = React.createClass({
  handleItemClick: function () {
    var orderRestaurant = CurrentOrderStore.orderRestaurant();

    if (RestaurantStore.currentRestaurant().id === orderRestaurant.id ||
        CurrentOrderStore.currentOrder().length === 0) {
      OrderItemActions.receiveItem(this.props.item);
    } else {
      UiActions.setFlash(
        ["Order already started with " + orderRestaurant.name,
         "Empty shopping cart before starting a new order."]
    );
    }
  },

  render: function () {
    return (
      <div
        className="menu-item"
        onClick={ this.handleItemClick }
      >
        <h4>{ this.props.item.name }</h4>
        <div className="item-price">{ "$" + this.props.item.price }</div>
        <p>{ this.props.item.description }</p>
      </div>
    );
  }
});
