window.ProfileDropDown = React.createClass({
  getInitialState: function () {
    return ({
      hidden: UiStore.profileDropDownHidden()
    });
  },

  componentDidMount: function () {
    UiStore.addChangeHandler(this._onChange);
    $("body").on("click", UiActions.closeProfileDropdown);
  },

  componentWillUnmount: function () {
    UiStore.removeChangeHandler(this._onChange);
    $("body").off("click", UiActions.closeProfileDropdown);
  },

  _onChange: function () {
    this.setState({ hidden: UiStore.profileDropDownHidden() });
  },

  signOut: function () {
    SessionsApiUtil.signOut();
    UiActions.closeProfileDropdown();
  },

  stopPropagation: function (e) {
    e.stopPropagation();
  },

  render: function () {
    var hidden = (this.state.hidden ? " hidden" : "");
    var Link = ReactRouter.Link;

    return (
      <ul
        className={ "profile-drop-down" + hidden }
        onClick={ this.stopPropagation }
      >
        <li>
          <Link
            to={"/users/" + CurrentUserStore.currentUser().id }
            className="drop-down-link"
            onClick={ UiActions.closeProfileDropdown }
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={"/users/" + CurrentUserStore.currentUser().id + "/addresses" }
            className="drop-down-link"
            onClick={ UiActions.closeProfileDropdown }
          >
            Addresses
          </Link>
        </li>
        <li>
          <Link
            to={"/users/" + CurrentUserStore.currentUser().id + "/orders" }
            className="drop-down-link"
            onClick={ UiActions.closeProfileDropdown }
          >
            Order History
          </Link>
        </li>
        <li>
          <Link
            to={"/users/" + CurrentUserStore.currentUser().id + "/restaurants" }
            className="drop-down-link"
            onClick={ UiActions.closeProfileDropdown }
          >
            Manage Restaurants
          </Link>
        </li>
        <li>
          <button
            className="drop-down-link"
            onClick={ this.signOut }
          >
            Sign Out
          </button>
        </li>
      </ul>
    );
  }
});
