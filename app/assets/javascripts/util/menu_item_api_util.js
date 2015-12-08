window.MenuItemApiUtil = {
  createMenuItem: function (menuItem) {
    $.ajax({
      url: 'api/menu_items',
      type: 'POST',
      data: { menu_item: menuItem },
      dataType: 'json',
      success: function (menuItem) {
        ApiUtil.fetchSingleRestaurant(menuItem.restaurant_id);
      },
      error: function (errors) {
        debugger
      }
    });
  }
}
