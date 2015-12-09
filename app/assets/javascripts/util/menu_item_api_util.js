window.MenuItemApiUtil = {
  createMenuItem: function (menuItem, callback) {
    $.ajax({
      url: 'api/menu_items',
      type: 'POST',
      data: { menu_item: menuItem },
      dataType: 'json',
      success: function (menuItem) {
        ApiUtil.fetchSingleRestaurant(menuItem.restaurant_id);
        callback && callback();
      },
      error: function (errors) {
        UiActions.setFlash($.parseJSON(errors.responseText));
      }
    });
  }
}
