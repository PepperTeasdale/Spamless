(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";
  var _filters = {};

  var FilterStore = root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _filters;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FilterConstants.UPDATE_CUISINES:
          _filters.cuisines = payload.cuisines;
          FilterStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
