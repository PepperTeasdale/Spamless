(function(root) {
  'use strict';

  var _currentAddress;
  var CHANGE_EVENT = "change";

  var updateCurrentAddress = function (currentAddress) {
    _currentAddress = currentAddress;
  };


  CurrentAddressStore = window.CurrentAddressStore = $.extend({}, EventEmitter.prototype, {
    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    currentAddress: function () {
      return _currentAddress;
    },

    parseAddress: function () {
      var splitAddress = _currentAddress.split(", ");
      return ({
        streetAddress: splitAddress[0],
        city: splitAddress[1],
        state: splitAddress[2].split(" ")[0],
        zip: splitAddress[2].split(" ")[1]
      });
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case CurrentAddressConstants.RECEIVE_CURRENT_ADDRESS:
          updateCurrentAddress(payload.currentAddress);
          CurrentAddressStore.emit(CHANGE_EVENT);
          break;
        default:

      }
    })
  });

}(this));
