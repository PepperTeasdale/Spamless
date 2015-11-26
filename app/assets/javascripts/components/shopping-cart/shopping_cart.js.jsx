window.ShoppingCart = React.createClass({
  getInitialState: function () {
    return ({
      orderItems: CurrentOrderStore.currentOrder(),
      total: CurrentOrderStore.currentTotal(),
      restaurant: CurrentOrderStore.orderRestaurant(),
      hidden: UiStore.shoppingCartHidden()
    });
  },

  componentDidMount: function () {
    CurrentOrderStore.addChangeHandler(this._onChange);
    UiStore.addChangeHandler(this._onChange);
  },
  
  componentWillUnmount: function () {
    CurrentOrderStore.removeChangeListener(this._onChange);
    UiStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      orderItems: CurrentOrderStore.currentOrder(),
      total: CurrentOrderStore.currentTotal(),
      restaurant: CurrentOrderStore.orderRestaurant(),
      hidden: UiStore.shoppingCartHidden()
    });
  },

  render: function () {
    var hiddenClass, orderHeader;

    hiddenClass = (this.state.hidden ? " hidden" : "");

    if (this.state.orderItems.length === 0) {
      orderHeader = (
        <div>
          <h3>Your Cart Is Empty!</h3>
          <span>Why not fill it with delicious spam?</span>
        </div>
      );
    } else {
      orderHeader = (
        <header>
          <h3>{ "Order From " + this.state.restaurant.name }</h3>
          <ReactRouter.Link to="/orders/new">Proceed To Checkout</ReactRouter.Link>
        </header>
      );
    }

    var orderItems = this.state.orderItems.map(function (item) {
      return <OrderItem item={ item } key={ item.id } />;
    });
    var total = CurrentOrderStore.currentTotal();
    var tax = CurrentOrderStore.currentTax();

    return (
      <div className={"shopping-cart" + hiddenClass}>
        <header className="panel-heading">
          {orderHeader}
        </header>
        <section className={"cart"}>
          <ul className="order-items-list">
            {orderItems}
          </ul>
          <dl className="group">
            <dt>Items subtotal:</dt>
            <dd>{ "$" + total.toFixed(2) }</dd>
          </dl>
          <dl className="group">
            <dt>Sales tax:</dt>
            <dd>{ "$" + tax.toFixed(2) }</dd>
          </dl>
          <dl className="shopping-cart-total group">
            <dt>Total:</dt>
            <dd>{ "$" + (tax + total).toFixed(2) }</dd>
          </dl>
        </section>
      </div>
    );
  }
});
