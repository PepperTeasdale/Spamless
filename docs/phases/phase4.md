# Phase 4: Orders (2 days)

## Rails
### Models
* Orders
* OrderItems

### Controllers
* Api::OrdersController (new, create, delete, edit)

### Views
* orders/new.json.jbuilder

## Flux
### Views (React Components)
* App
  * AccountPage
    * PreviousOrdersIndex
      * PreviousOrder
  * RestaurantDetail
    * ShoppingCart
  * LandingPage
    * RecentOrdersList
      * RecentOrder

### Stores
* OrderStore

### Actions
* ApiActions.receiveAllPreviousOrders
* ApiActions.receiveSinglePreviousOrder
* ApiActions.receiveRecentPreviousOrders


### ApiUtil
* ApiUtil.fetchAllPreviousOrders
* ApiUtil.fetchSinglePreviousOrder
* ApiUtil.fetchRecentPreviousOrders

## Gems/Libraries
