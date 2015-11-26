(function(root) {
  'use strict';

  var _TAX = 0.08875;
  var _currentOrder = [];
  var _orderRestaurant;
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

    currentTax: function () {
      return this.currentTotal() * _TAX;
    },

    orderRestaurant: function () {
      return $.extend({}, _orderRestaurant);
    },

    addToCart: function (orderItem) {
      if (_currentOrder.length === 0) {
        _orderRestaurant = RestaurantStore.currentRestaurant();
      }

      if (_currentOrder.indexOf(orderItem) === -1) {
        orderItem.qty = 1;
        _currentOrder.push(orderItem);
      } else {
        _currentOrder[_currentOrder.indexOf(orderItem)].qty += 1;
      }
    },

    removeFromCart: function (orderItem) {
      _currentOrder.splice(_currentOrder.indexOf(orderItem), 1);

      if (_currentOrder.length === 0) {
        _orderRestaurant = undefined;
      }
    },

    currentTotal: function () {
      var sum = 0;
      _currentOrder.forEach(function (orderItem) {
        sum += orderItem.price * orderItem.qty;
      });

      return sum;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case CurrentOrderConstants.ORDER_ITEM_RECEIVED:
          CurrentOrderStore.addToCart(payload.orderItem);
          CurrentOrderStore.emit(CHANGE_EVENT);
          break;

        case CurrentOrderConstants.ORDER_ITEM_REMOVED:
          CurrentOrderStore.removeFromCart(payload.orderItem);
          CurrentOrderStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
