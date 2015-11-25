(function(root) {
  'use strict';

  var _addresses = [];
  var CHANGE_EVENT = "change";

  var AddressStore = window.AddressStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _addresses.slice(0);
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case AddressConstants.ADDRESSES_RECEIVED:
          _addresses = payload.addresses;
          AddressStore.emit(CHANGE_EVENT);
          break;

        case AddressConstants.SINGLE_ADDRESS_RECEIVED:
          _addresses.push(payload.addresses);
          AddressStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
