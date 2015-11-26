var OrderItemActions = {
  receiveItem: function (orderItem) {
    AppDispatcher.dispatch({
      actionType: CurrentOrderConstants.ORDER_ITEM_RECEIVED,
      orderItem: orderItem
    })
  },

  removeItem: function (orderItem) {
    AppDispatcher.dispatch({
      actionType: CurrentOrderConstants.ORDER_ITEM_REMOVED,
      orderItem: orderItem
    })
  },

  clearOrder: function () {
    AppDispatcher.dispatch({
      actionType: CurrentOrderConstants.CLEAR_ORDER
    })
  }
}
