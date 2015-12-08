window.NewMenuItemForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      name: "",
      description: "",
      price: "",
      menuCategory: "",
    });
  },

  createMenuItem: function (e) {
    e.preventDefault();
    MenuItemApiUtil.createMenuItem({
      name: this.state.name,
      description: this.state.description,
      price: parseFloat(this.state.price),
      menu_category: this.state.menuCategory,
      restaurant_id: RestaurantStore.currentRestaurant().id
    })
  },

  render: function () {
    var categories = RestaurantStore.menuCategories().map(function (category, idx) {
      return (
        <option
          key={ idx }
          value={ category }
        />
    );
    });

    return (
      <form onSubmit={ this.createMenuItem }>
        <span>Name</span>
        <input
          type="text"
          valueLink={ this.linkState('name') }
          placeholder="Item name"
        />
        <span>Description</span>
        <input
          type="text"
          valueLink={ this.linkState('description') }
          placeholder="Brief item description"
        />
        <span>Price</span>
        <input
          type="text"
          valueLink={ this.linkState('price') }
          placeholder="eg 2.50"
        />
        <span>Menu Category</span>
        <input
          type="text"
          list="category-datalist"
          valueLink={ this.linkState('menuCategory') }
          placeholder="eg 'Breakfast'"
        />
        <datalist id="category-datalist">
          { categories }
        </datalist>
        <button onClick={ this.createMenuItem }>
          Create Menu Item
        </button>
      </form>
    )
  }

});