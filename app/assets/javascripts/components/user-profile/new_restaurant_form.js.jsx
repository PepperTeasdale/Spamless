window.NewRestaurantForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return this.clearForm();
  },

  clearForm: function () {
    return ({
      name: "",
      cuisineType: "",
      description: "",
      streetAddress: "",
      city: "",
      state: "",
      zipcode: "",
      addressId: "",
      imageUrl: "",
      imageFile: null
    })
  },

  changeFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var formCtx = this

    reader.onloadend = function () {
      formCtx.setState({ imageUrl: reader.result, imageFile: file });
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  },

  redirect: function (id) {
    this.setState(this.clearForm());
    this.history.pushState(null, "/restaurants/" + id);
  },

  createRestaurant: function (addressId) {
    var name = this.state.name;
    var addressId = addressId;
    var imageFile = this.state.imageFile;
    var description = this.state.description;
    var cuisineType = this.state.cuisineType;

    var formData = new FormData();
    formData.append("restaurant[name]", name);
    formData.append("restaurant[image]", imageFile);
    formData.append("restaurant[address_id]", addressId);
    formData.append("restaurant[description]", description);
    formData.append("restaurant[cuisine_type]", cuisineType);

    RestaurantsApiUtil.createRestaurant(formData, this.redirect)
  },

  handleSubmit: function (e) {
    e.preventDefault();
    AddressApiUtil.saveAddress({
      street_address: this.state.streetAddress,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      user_id: CurrentUserStore.currentUser().id
    }, this.createRestaurant);
  },

  render: function () {
    var previewImage;
    if (this.state.imageUrl !== "") {
      previewImage = (
        <img
          className="preview-image"
          src={this.state.imageUrl}
        />
      )
    }

    return (
      <div className="new-restaurant-form-wrapper">
        <form className="new-restaurant-form" onSubmit={ this.handleSubmit }>
          <h1>Create Restaurant</h1>
          <span>Restaurant Name</span>
          <input
            type="text"
            valueLink={ this.linkState('name') }
            placeholder="Name"
          />

          <span>Image</span>
          <input type="file" onChange={ this.changeFile } />

          { previewImage }

          <span>Cuisine Type</span>
          <input
            type="text"
            valueLink={ this.linkState('cuisineType') }
            placeholder="eg 'Thai'"
          />

        <span>Description</span>
          <input
            type="text"
            valueLink={ this.linkState('description') }
            placeholder="Short description of your restaurant"
          />

          <span>Street Address</span>
          <input
            type="text"
            valueLink={ this.linkState('streetAddress') }
            placeholder="Address"
          />

          <span>City</span>
          <input
            type="text"
            valueLink={ this.linkState('city') }
            placeholder="City"
          />

          <span>State</span>
          <input
            type="text"
            valueLink={ this.linkState('state') }
            placeholder="state"
          />

        <span>Zipcode</span>
          <input
            type="text"
            valueLink={ this.linkState('zipcode') }
            placeholder="Zipcode"
          />
        <div className="submit-wrapper">
          <button>Submit</button>
        </div>
        </form>
      </div>
    )
  }
});
