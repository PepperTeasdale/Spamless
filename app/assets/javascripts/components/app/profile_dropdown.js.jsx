window.ProfileDropDown = React.createClass({
  getInitialState: function () {
    return ({
      hidden: UiStore.profileDropDownHidden()
    });
  },

  componentDidMount: function () {
    UiStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    UiStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ hidden: UiStore.profileDropDownHidden() });
  },

  render: function () {
    var hidden = (this.state.hidden ? " hidden" : "");
    var Link = ReactRouter.Link;

    return (
      <ul className={ "profile-drop-down" + hidden }>
        <li>
          <Link
            to={"/users/" + CurrentUserStore.currentUser().id }
            className="drop-down-link"
            onClick={ UiActions.toggleProfileDropdown }
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={"/users/" + CurrentUserStore.currentUser().id + "/addresses" }
            className="drop-down-link"
            onClick={ UiActions.toggleProfileDropdown }
          >
            Addresses
          </Link>
        </li>
        <li>
          <Link
            to={"/users/" + CurrentUserStore.currentUser().id + "/orders" }
            className="drop-down-link"
            onClick={ UiActions.toggleProfileDropdown }
          >
            Order History
          </Link>
        </li>
        <li>
          <button onClick={ SessionsApiUtil.signOut }>Sign Out</button>
        </li>
      </ul>
    );
  }
});
