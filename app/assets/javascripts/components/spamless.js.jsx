$(function () {
  var root = document.getElementById("content");
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    getInitialState: function () {
      return ({
        cartHidden: true,
      });
    },

    componentDidMount: function () {
      SessionsApiUtil.signOut();
    },

    render: function () {
      return (
        <div>
          <ShoppingCart hidden={ this.state.cartHidden } />
          <div className="modal-wrapper">
            <AuthModal />
          </div>
          {this.props.children}
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
    <Route path="/orders/new" component={Checkout} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
