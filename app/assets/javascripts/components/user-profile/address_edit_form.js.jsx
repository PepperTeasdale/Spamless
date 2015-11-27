window.AddressEditForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    var address = AddressStore.find(parseInt(this.props.params.addressId));

    return ({
      streetAddress: address.street_address,
      city: address.city,
      state: address.state,
      zipcode: address.zipcode
    });
  },

  updateAddress: function (e) {
    e.preventDefault();

    AddressApiUtil.updateAddress({
      street_address: this.state.streetAddress,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      id: parseInt(this.props.params.addressId)
    }, this.redirect);
  },

  redirect: function () {
    this.history.pushState(
      null, "/users/" + CurrentUserStore.currentUser().id + "/addresses"
    );
  },

  render: function () {
    return (
      <section className="edit-address">
        <h1 className="user-profile-index-header">Edit Address</h1>
        <form className="address-form" onSubmit={ this.updateAddress }>
            <div>Address</div>
            <input
              type="text"
              valueLink={ this.linkState('streetAddress') }
              placeholder="Street Address"
            />
            <div>City</div>
            <input
              type="text"
              valueLink={ this.linkState('city') }
              placeholder="City"
            />
            <div>State</div>
            <input
              type="text"
              valueLink={ this.linkState('state') }
              placeholder="State"
            />
            <div>Zipcode</div>
            <input
              type="text"
              valueLink={ this.linkState('zipcode') }
              placeholder="Zipcode"
            />
          <button onClick={ this.updateAddress }>Update Address</button>
        </form>
      </section>
    );
  }

});
