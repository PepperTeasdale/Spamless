window.Checkout = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return ({
      streetAddress: CurrentAddressStore.parseAddress().streetAddress,
      city: CurrentAddressStore.parseAddress().city,
      state: CurrentAddressStore.parseAddress().state,
      zipcode: CurrentAddressStore.parseAddress().zipcode,
      fname: CurrentUserStore.currentUser().fname,
      lname: CurrentUserStore.currentUser().lname,
      saveAddress: false
    });
  },

  componentDidMount: function () {
    if (!CurrentUserStore.isSignedIn()) {
      UiActions.toggleAuthModal();
    }

    CurrentUserStore.addChangeHandler(this._onChange);
    UiActions.openShoppingCart();
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this._onChange);
    UiActions.closeShoppingCart();
  },

  _onChange: function () {
    this.setState({
      fname: CurrentUserStore.currentUser().fname,
      lname: CurrentUserStore.currentUser().lname
    });
  },

  handleCheckbox: function () {
    this.setState({ saveAddress: !this.state.saveAddress });
  },

  address: function () {
    var address = this.state.streetAddress + ", " + this.state.city;
    address += ", " + this.state.state + " " + this.state.zipcode;
    return address;
  },

  redirect: function () {
    OrderItemActions.clearOrder();
    this.history.pushState(null, "/");
  },

  placeOrder: function (e) {
    e.preventDefault();

    var contactInfo = {
      fname: this.state.fname,
      lname: this.state.lname,
    };

    OrdersApiUtil.submitOrder({
      order_method: RestaurantStore.orderMethod(),
      address: this.address(),
      contact: contactInfo,
      order_items: CurrentOrderStore.currentOrder(),
      user_id: CurrentUserStore.currentUser().id,
      restaurant_id: RestaurantStore.currentRestaurant().id
    }, this.redirect);

    if (this.state.saveAddress) {
      AddressApiUtil.saveAddress({
        street_address: this.state.streetAddress,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        user_id: CurrentUserStore.currentUser().id
      });
    }
  },

  render: function () {
    return (
      <div>
        <Navbar redirect={ this.redirect } />
        <form className="checkout-form">
          <label>
            Contact
            <input
              type="text"
              valueLink={ this.linkState('fname') }
              placeholder="First name"
            />
            <input
              type="text"
              valueLink={ this.linkState('lname') }
              placeholder="Last name"
            />

          </label>

          <label>
            Address
            <input
              type="text"
              valueLink={ this.linkState('streetAddress') }
              placeholder="Street Address"
            />
            <input
              type="text"
              valueLink={ this.linkState('city') }
              placeholder="City"
            />
            <input
              type="text"
              valueLink={ this.linkState('state') }
              placeholder="State"
            />
            <input
              type="text"
              valueLink={ this.linkState('zipcode') }
              placeholder="Zipcode"
            />
          </label>
          <label>
            Save Address?
            <input type="checkbox" onChange={ this.handleCheckbox } />
          </label>

          <button onClick={ this.placeOrder }>Place Your Order</button>
        </form>
      </div>
    );
  }
});
