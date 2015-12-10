window.UserProfileSidebar = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div>
        <section className="user-profile-sidebar">
          <h2>Your Account</h2>
          <ul>
            <li>
              <Link to={"/users/" + CurrentUserStore.currentUser().id + "/addresses"}>
                Addresses
              </Link>
            </li>
            <li>
              <Link to={"/users/" + CurrentUserStore.currentUser().id + "/orders"}>
                Orders
              </Link>
            </li>
            <li>
              <Link to={"/users/" + CurrentUserStore.currentUser().id + "/restaurants"}>
                Manage Restaurants
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
});
