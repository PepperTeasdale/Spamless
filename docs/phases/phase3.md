# Phase 3: Menu Items (1.5 days)
## Rails
### Models
* MenuItem

### Controllers
* Api::MenuItem (create, index, show)

### Views
* restaurants/show.json.jbuilder
* menu_items/index.json.jbuilder
* menu_items/show.json.jbuilder

## Flux
### Views (React Components)
* App
  * RestaurantDetail
    * Header
    * Menu
      * MenuItem
    * MenuItemDetail

### Stores
* MenuItem

### Actions
* ApiActions.receiveAllMenuItems
* ApiActions.receiveSingleMenuItem

### ApiUtil
* ApiUtil.fetchAllMenuItems
* ApiUtil.fetchSingleMenuItem

## Gems/Libraries
