window.AddressApiUtil = {
  saveAddress: function (address) {
    $.ajax({
      url: "/api/addresses",
      type: "POST",
      data: { address: address },
      dataType: "json",
      success: function (address) {

      },
      failure: function (errors) {

      }
    });
  }
};
