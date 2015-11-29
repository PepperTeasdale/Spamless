Spamless
========

[Heroku link][heroku] Live Demo

[heroku]: http://www.spam-less.com

Minimum Viable Product
----------------------
Spamless is a seamless clone where users can easily find nearby restaurants and
order from their 100% spam-free menus. Spamless uses Ruby on Rails with a PostgreSQL
database to serve a RESTful JSON to a single page front-end using React with a
FLUX application architecture. It uses the Geocoder gem for geolocation and
jQuery.

Main Functionality
------------------

  * Authentication and authorization
  * Search and filter restaurants by cuisine and location
  * Create and read orders
  * ~~Order delicious spam~~
  * Create, edit, read and destroy addresses

Implementation Details
----------------------
I wrote the Authentication and CSS from scratch. The application architecture is
especially notable.

* UI elements have their state stored in the UiStore. This includes things like
  the visibility of a modal or helpful error messages being flashed on the screen.
  UiActions.setFlash() can be used to set errors on the front-end:
```
if (RestaurantStore.currentRestaurant().id === orderRestaurant.id ||
    CurrentOrderStore.currentOrder().length === 0) {
  OrderItemActions.receiveItem(this.props.item);
} else {
  UiActions.setFlash(
    ["Order already started with " + orderRestaurant.name,
     "Empty shopping cart before starting a new order."]
);
```

* or display errors rendered by Rails:
```
signUp: function (registrationParams) {
  $.ajax({
    ...

    success: function (currentUser) {
      AppDispatcher.dispatch({
        actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
        currentUser: currentUser
      });
      UiActions.closeAuthModal();
    },
    error: function (data) {
      UiActions.setFlash($.parseJSON(data.responseText).errors);
    }
  });
}
```

* The former example above's UiActions.closeAuthModal() action creator shows how
  the UiStore helps keep track of the state of top-level components that are
  available on all of the routes in a Flux-y way. For example, the shopping cart
  should pop out when the user is viewing the menu or checking out, but start out
  hidden at other points, while remaining accessible. The modularity of the
  UiStore makes it easy to add components that are affected by actions in multiple
  views.
