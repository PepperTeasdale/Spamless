$(function () {
  var root = document.getElementById("content");
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          {this.props.children}
          <ShoppingCart hidden={ true } />
          <div className="modal-wrapper">
            <AuthModal />
          </div>
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="/restaurants" component={SearchIndex} />
      <Route
        path="/restaurants/:restaurantId"
        component={RestaurantDetail}
      />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
