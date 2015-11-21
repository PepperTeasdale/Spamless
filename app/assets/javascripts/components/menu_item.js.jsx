window.MenuItem = React.createClass({
  handleItemClick: function () {
    OrderItemActions.receiveMenuItem(this.props.item);
  },

  render: function () {
    return (
      <div
        className="menu-item"
        onClick={ this.handleItemClick }
      >
        <h4>{ this.props.item.name }</h4>
        <div className="item-price">{ "$" + this.props.item.price }</div>
        <p>{ this.props.item.description }</p>
      </div>
    );
  }
});
