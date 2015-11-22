window.FilterActions = {
  updateCuisines: function (cuisines) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_CUISINES,
      cuisines: cuisines
    });
  }
};
