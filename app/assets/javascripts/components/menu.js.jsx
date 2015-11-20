Menu = React.createClass({
  getInitialState: function () {
    return ({
      menuItems: MenuItemStore.all(),
      menuCategories: MenuItemStore.categories()
    });
  },

  componentDidMount: function () {

  },
  render: function () {
    return <div></div>;
  }
});
