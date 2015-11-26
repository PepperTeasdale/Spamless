window.AddressActions = {
  receiveAddresses: function (addresses) {
    AppDispatcher.dispatch({
      actionType: AddressConstants.ADDRESSES_RECEIVED,
      addresses: addresses
    });
  },

  receiveSingleAddress: function (address) {
    AppDispatcher.dispatch({
      actionType: AddressConstants.SINGLE_ADDRESS_RECEIVED,
      address: address
    });
  },

  removeAddress: function (address) {
    AppDispatcher.dispatch({
      actionType: AddressConstants.ADDRESS_DELETED,
      address: address
    });
  },

  updateAddress: function (address) {
    AppDispatcher.dispatch({
      actionType: AddressConstants.ADDRESS_UPDATED,
      address: address
    });
  }
};
