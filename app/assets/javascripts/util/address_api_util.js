window.AddressApiUtil = {
  saveAddress: function (address) {
    $.ajax({
      url: "/api/addresses",
      type: "POST",
      data: { address: address },
      dataType: "json",
      success: function (address) {
        AddressActions.receiveSingleAddress(address);
      },
      failure: function (errors) {
      }
    });
  },

  fetchAddresses: function (id) {
    $.ajax({
      url: '/api/users/' + id + '/addresses',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        AddressActions.receiveAddresses(data.addresses);
      },
      error: function () {
        UiActions.setFlash(["Something went wrong"]);
      }
    });
  },

  deleteAddress: function (id) {
    $.ajax({
      url: '/api/addresses/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: function (address) {
        AddressActions.removeAddress(address);
      },
      error: function () {
        UiActions.setFlash(["Something went wrong"]);
      }
    });
  },

  updateAddress: function (address, callback) {
    $.ajax({
      url: '/api/addresses/' + address.id,
      type: 'PATCH',
      data: { address: address },
      dataType: 'json',
      success: function (data) {
        AddressActions.updateAddress(address);
        callback();
      },
      error: function (errors) {
      }
    });
  }
};
