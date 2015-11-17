# Phase 1: Authentication, User, Address and Restaurant Models CRUD (2 days)

## Rails
### Models
* User
* Restaurant
* RestaurantDetail
* Address

### Controllers
* Api::UsersController (create, new)
* Api::AddressesController(index, create, new, edit, update, delete)
* Api::RestaurantController (create, show, index, update)

### Views
* static_pages/root.html.erb
* restaurants/index.json.jbuilder
* restaurants/show.json.jbuilder

## Flux
### Views (React Components)
* App
  * Navbar
  * Landing Screen
    * SignUpForm
    * SignInForm
  * AccountPage
    * NewAddressForm
    * AddressListView

### Stores
* Address

### Actions
* ApiActions.receiveSingleAddress
* ApiActions.receiveAllAddresses
* ApiActions.deleteSingleAddress

### ApiUtil
* ApiUtil.fetchAllAddresses
* ApiUtil.fetchSingleAddress
* ApiUtil.editAddress
* ApiUtil.deleteAddress


## Gems/Libraries
* devise
* google maps geocoding api
* figaro
* jbuilder
