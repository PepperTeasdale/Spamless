FilterActions = {
  updateCuisines: function (cuisines) {
    AppDispatcher.dispatch({
      actionType: FilterActions.UPDATE_CUISINES,
      cuisines: cuisines
    });
  }
};
