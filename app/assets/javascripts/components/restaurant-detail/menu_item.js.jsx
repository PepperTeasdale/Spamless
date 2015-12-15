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

  openEditForm: function () {

  },

  openDeleteConfirmation: function () {

  },

  render: function () {
    var buttons;

    if (CurrentUserStore.currentUser().id === RestaurantStore.currentRestaurant().user_id) {
      buttons = (
        <div className="menu-item-button-container">
          <button onClick={ this.openEditForm }>Edit</button>
          <button onClick={ this.openDeleteConfirmation }>Delete</button>
        </div>
      );
    }

    return (
      <div
        className={"menu-item column-" + this.props.column }
        onClick={ this.handleItemClick }
      >
        <h4>{ this.props.item.name }</h4>
        <div className="item-price">{ "$" + this.props.item.price }</div>
        <small>{ this.props.item.description }</small>
      </div>
    );
  }
});
