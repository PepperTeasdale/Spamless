window.OrderApiUtil = {
  submitOrder: function (data) {
    $.ajax({
      url: '/api/orders',
      type: 'POST',
      data: { order: data },
      dataType: 'json',
      success: function (data) {
      },
      error: function (errors) {
      }
    });
  }
};
