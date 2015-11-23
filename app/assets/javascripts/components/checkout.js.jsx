window.Checkout = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      address: CurrentAddressStore.currentAddress(),
      tip: 0.15,
      fname: CurrentUserStore.currentUser().fname,
      lname: CurrentUserStore.currentUser().lname,
      phone: ""
    });
  },

  placeOrder: function (e) {
    e.preventDefault();

    var contactInfo = {
      fname: this.state.fname,
      lname: this.state.lname,
      phone: this.state.phone
    };

    OrderApiUtil.submitOrder({
      address: this.state.address,
      contact: contactInfo,
      order_items: CurrentOrderStore.currentOrder(),
      user_id: CurrentUserStore.currentUser().id,
      restaurant_id: RestaurantStore.currentRestaurant().id
    });
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
            <input
              type="text"
              valueLink={ this.linkState('phone') }
              placeholder="Phone number"
            />

          </label>

          <label>
            Address
            <input
              type="text"
              valueLink={ this.linkState('address') }
              placeholder="Address"
            />
          </label>
          <button onClick={ this.placeOrder }>Place Your Order</button>
        </form>
      </div>
    );
  }
});
