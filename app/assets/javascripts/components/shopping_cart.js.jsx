window.ShoppingCart = React.createClass({
  getInitialState: function () {
    return ({
      orderItems: CurrentOrderStore.currentOrder(),
      total: CurrentOrderStore.currentTotal(),
      restaurant: RestaurantStore.currentRestaurant()
    });
  },

  componentDidMount: function () {
    CurrentOrderStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      orderItems: CurrentOrderStore.currentOrder(),
      total: CurrentOrderStore.currentTotal()
    });
  },

  componentWillUnmount: function () {
    CurrentOrderStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var hiddenClass, orderHeader;

    if (this.props.hidden) {
      hiddenClass = " hidden";
    }

    if (this.state.orderItems.length === 0) {
      orderHeader = (
        <div>
          <h3>Your Cart Is Empty!</h3>
          <span>Why not fill it with delicious spam?</span>
        </div>
      );
    } else {
      orderHeader = (
        <div>
          <h3>Order From {this.state.restaurant}</h3>
          <ReactRouter.Link to="/orders/new">Proceed To Checkout</ReactRouter.Link>
        </div>
      );
    }

    var orderItems = this.state.orderItems.map(function (item) {
      return <OrderItem item={ item } key={ item.id } />;
    });

    return (
      <div className={"shopping-cart" + hiddenClass}>
        <header className="panel-heading">
          {orderHeader}
        </header>
        <div className={"cart"}>
          {orderItems}
          <p>Items subtotal:</p>
          <span>{ CurrentOrderStore.currentTotal() }</span>
          <p>Sales tax:</p>
          <span>{ CurrentOrderStore.currentTotal() * 0.08875 }</span>
          <footer>
            <p>Total:</p>
            <span>{ CurrentOrderStore.currentTotal() * 1.08875 }</span>
          </footer>
        </div>
      </div>
    );
  }
});
