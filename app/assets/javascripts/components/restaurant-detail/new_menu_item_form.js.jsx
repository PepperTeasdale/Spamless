window.NewMenuItemForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      name: "",
      description: "",
      price: "",
      menuCategory: "",
      hidden: true
    });
  },

  render: function () {

  }

});
