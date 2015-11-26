window.AddressesIndex = React.createClass({
  getInitialState: function () {
    return ({ addresses: AddressStore.all() });
  },

  componentDidMount: function () {
    AddressApiUtil.fetchAddresses(CurrentUserStore.currentUser().id);
    AddressStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    AddressStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ addresses: AddressStore.all() });
  },

  deleteAddress: function (e) {
    AddressApiUtil.deleteAddress(e.target.name);
  },

  render: function () {
    var Link = ReactRouter.Link;

    var addresses = AddressStore.all().map(function (address) {
      return (
        <li className="user-profile-index-item" key={ address.id }>
          <button
            name={ address.id }
            onClick={ this.deleteAddress }>✖</button>
          <ul>
            <li>
              <Link to={ "/addresses/" + address.id + "/edit" }>
                { address.street_address }
              </Link>
            </li>
            <li>
              <Link to={ "/addresses/" + address.id + "/edit" }>
                { address.city + ", " + address.state + " " + address.zipcode }
              </Link>
            </li>
          </ul>
        </li>
      );
    }.bind(this));

    return (
      <div className="orders-index">
        <h1>ADDRESSES</h1>
        <ul>
          { addresses }
        </ul>
      </div>
    );
  }
});
