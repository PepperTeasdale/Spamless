(function(root) {
  'use strict';

  var _currentOrder = [];
  var CHANGE_EVENT = "change";

  var CurrentOrderStore = root.CurrentOrderStore = $.extend({},EventEmitter.prototype, {
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeChangeListener(callback);
    },

    currentOrder: function () {
      return _currentOrder.slice(0);
    },

    addToCart: function (orderItem) {
      _currentOrder.push(orderItem);
    },

    removeFromCart: function (orderItem) {
      _currentOrder.splice(_currentOrder.indexOf(orderItem), 1);
    },

    currentTotal: function () {
      var sum = 0;
      _currentOrder.forEach(function (orderItem) {
        sum += orderItem.price;
      });

      return sum;
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case CurrentOrderConstants.ORDER_ITEM_RECEIVED:
          CurrentOrderStore.addToCart(payload.orderItem);
          CurrentOrderStore.emit(CHANGE_EVENT);
          break;

      }
    })
  });

}(this));
