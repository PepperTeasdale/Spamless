window.CurrentAddressActions = {
  receiveCurrentAddress: function (currentAddress) {
    AppDispatcher.dispatch({
      actionType: CurrentAddressConstants.RECEIVE_CURRENT_ADDRESS,
      currentAddress: currentAddress
    });
  }
};
