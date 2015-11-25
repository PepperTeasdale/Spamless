(function(root) {
  'use strict';

  var _orders = [];
  var CHANGE_EVENT = "change";

  var OrdersStore = window.OrdersStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _orders.slice(0);
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case OrderConstants.ORDERS_RECEIVED:
          _orders = payload.orders;
          OrdersStore.emit(CHANGE_EVENT);
          break;
        default:
      }
    })
  });

}(this));
