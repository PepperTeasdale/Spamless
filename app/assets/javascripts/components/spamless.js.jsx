$(function () {
  var root = document.getElementById("content");
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    componentDidMount: function () {
      // Fetch nearby restaurants
      navigator.geolocation.getCurrentPosition(function(location) {
        ApiUtil.fetchRestaurants({
          address: [location.coords.latitude, location.coords.longitude],
          orderMethod: "pickup"
        });
      });
    },

    render: function () {
      var checkout = false;

      if (this.props.location.pathname === "/orders/new") {
        var checkout = true;
      }

      return (
        <div>
          <Flash />
          <ShoppingCart checkout={ checkout } />
          <div className="auth-auth-modal-wrapper">
            <AuthModal />
          </div>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={ App }>
      <IndexRoute component={ LandingPage } />
      <Route path="/restaurants" component={ SearchIndex } />
      <Route
        path="/restaurants/:restaurantId"
        component={ RestaurantDetail }
      />
      <Route path="/orders/new" component={Checkout} />
      <Route path="/users/:userId" component={ UserProfile }>
        <Route
          path="/users/:userId/orders"
          component={ OrdersIndex }
        />
        <Route
          path="/users/:userId/addresses"
          component={ AddressesIndex }
        />
        <Route
          path="/addresses/:addressId/edit"
          component={ AddressEditForm }
        />
        <Route
          path="/users/:userId/restaurants"
          component={ UserRestaurantsIndex }
        />
        <Route
          path="/users/:userId/restaurants/new"
          component={ NewRestaurantForm }
        />
      </Route>
    </Route>
  );

  React.render(<Router>{ routes }</Router>, root);
});
