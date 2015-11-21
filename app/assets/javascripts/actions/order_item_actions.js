var OrderItemActions = {
  receiveMenuItem: function (orderItem) {
    AppDispatcher.dispatch({
      actionType: CurrentOrderConstants.ORDER_ITEM_RECEIVED,
      orderItem: orderItem
    })
  }
}
