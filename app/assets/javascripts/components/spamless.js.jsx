$(function () {
  var root = document.getElementById("content");
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <Flash />
          <ShoppingCart />
          <div className="modal-wrapper">
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
        </Route>
    </Route>
  );

  React.render(<Router>{ routes }</Router>, root);
});
