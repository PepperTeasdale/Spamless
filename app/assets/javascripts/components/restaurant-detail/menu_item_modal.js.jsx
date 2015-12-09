window.MenuItemModal = React.createClass({
  getInitialState: function () {
    return ({
      formType: this.props.formType,
      restaurant: this.props.restaurant,
      hidden: UiStore.menuItemModalHidden()
    });
  },

  componentDidMount: function () {
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
      restaurant: nextProps.restaurant
    });
  },

  render: function () {
    var form, hidden;

    hidden = (this.state.hidden ? " hidden" : "")
    if (this.state.formType === "new") {
      form = <NewMenuItemForm restaurant={ this.state.restaurant } />
    } else if (this.state.formType === "edit") {
      form = <EditItemForm menuItem={ this.state.menuItem } />
    } else {
      form = <DeleteItemConfirmation menuItem={ this.state.menuItem } />
    }

    return (
      <div className={ "menu-item-modal-wrapper" + hidden }>
        <section className={ "menu-item-modal" + hidden }>
          { form }
        </section>
      </div>
    );
  }
});
