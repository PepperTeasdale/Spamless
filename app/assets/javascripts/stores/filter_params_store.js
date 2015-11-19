(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";
  var _filters = {};

  var FilterStore = root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _filters;
    },
  });
}(this));
