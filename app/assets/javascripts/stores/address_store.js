(function(root) {
  'use strict';

  var _addresses = [];
  var CHANGE_EVENT = "change";

  var AddressStore = window.AddressStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _addresses.slice(0);
    },

    first: function () {
      if (_addresses.length > 0) {
        return _addresses[0].full_street_address;
      } else {
        return "";
      }
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    find: function (id) {
      for (var i = 0; i <_addresses.length; i++) {
        if (_addresses[i].id === id) {
          return _addresses[i];
        }
      }
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case AddressConstants.ADDRESSES_RECEIVED:
          _addresses = payload.addresses;
          AddressStore.emit(CHANGE_EVENT);
          break;

        case AddressConstants.SINGLE_ADDRESS_RECEIVED:
          _addresses.push(payload.address);
          AddressStore.emit(CHANGE_EVENT);
          break;

        case AddressConstants.ADDRESS_DELETED:
          _addresses.splice(_addresses.indexOf(payload.address), 1);
          AddressStore.emit(CHANGE_EVENT);
          break;

        case AddressConstants.ADDRESS_UPDATED:
          var target = AddressStore.find(payload.address.id);
          _addresses[_addresses.indexOf(target)] = payload.address;
          AddressStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
