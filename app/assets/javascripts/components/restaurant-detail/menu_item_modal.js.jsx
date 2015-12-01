window.MenuItemModal = React.createClass({
  getInitialState: function () {
    return ({
      formType: this.props.formType,
      restaurant: this.props.restaurant,
      menuItem: this.props.menuItem,
      hidden: UiStore.menuItemModalHidden()
    });
  },

  componentWillUnmount: function () {
    UiStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    UiStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ hidden: UiStore.menuItemModalHidden() })
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      formType: nextProps.formType,
      restaurant: nextProps.restaurant,
      menuItem: nextProps.menuItem
    });
  },

  render: function () {
    var form;
    if (this.state.formType === "new") {
      form = <NewItemForm restaurant={ this.state.restaurant } />
    } else if (this.state.formType === "edit") {
      form = <EditItemForm menuItem={ this.state.menuItem } />
    } else {
      form = <DeleteItemConfirmation menuItem={ this.state.menuItem } />
    }

    return (
      <div className="menu-item-modal-wrapper">
        <section className="menu-item-modal">
          { form }
        </section>
      </div>
    );
  }
});
