window.ShoppingCart = React.createClass({
  getInitialState: function () {
    return ({
      orderItems: CurrentOrderStore.currentOrder(),
      total: CurrentOrderStore.currentTotal()
    });
  },

  componentDidMount: function () {
    CurrentOrderStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      restaurant: "",
      orderItems: CurrentOrderStore.currentOrder(),
      total: CurrentOrderStore.currentTotal()
    })
  },

  componentWillUnmount: function () {
    CurrentOrderStore.removeChangeListener(this._onChange);
  },

  deleterOrderItem: function (e) {
    debugger
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
          <ReactRouter.Link to="#">Proceed To Checkout</ReactRouter.Link>
        </div>
      );
    }

    var orderItems = this.state.orderItems.map(function (item) {
      return (
        <div className="order-item" key={item.id}>
          <button onClick={ this.deleteOrderItem }>X</button>
          <span>item.qty</span>
          <h5>{item.name}</h5>
          <span>item.price</span>
        </div>
      )
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
          <span>{ CurrentOrderStore.currentTotal() * .08875 }</span>
          <footer>
            <p>Total:</p>
            <span>{ CurrentOrderStore.currentTotal() * 1.08875 }</span>
          </footer>
        </div>
      </div>
    )
  }
});
