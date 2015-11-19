Spamless
========

[Heroku link][heroku] Live Demo

[heroku]: http://serene-hamlet-4726.herokuapp.com

Minimum Viable Product
----------------------
A seamless clone where users can easily find nearby restaurants and order from
their 100% spam-free menus. Spamless allows users to:
  * Create and account
  * Log in and out
  * Search and filter restaurants by cuisine, price, etc
  * Create and read orders
  * Order delicious spam
  * Create, edit, read and destroy restaurants and menus
  * Create, edit, read and destroy addresses

### Design Docs

  * [View Wireframes][view]
  * [DB schema][schema]

  [view]: ./docs/views.md
  [schema]: ./docs/schema.md

Implementation Timeline
-----------------------
### Phase One- Authentication, User/ Restaurant Models CRUD (1 day)
In phase one, I will start with creating the User model with authentication.
I will be using devise so that I can later use OmniAuth if there is time. I will
create the landing page, with a navbar that links to the sign up/ in modal.
Then, I will create the restaurant model and associated JSON api.

[Details][phase-one]

### Phase Two- Flux Architecture and Restaurant Search (2.5 days)
In phase two, I will set up Flux, the React Router and the views for displaying a list
of restaurants. After setting up Flux architecture, I will create a container component
for restaurant card components. There will be a filter form component to allow
customers to search and filter by distance, type of cuisine. I will add styling
for the search index page and seed the database with a few restaurants and users.
At the end of phase two, users can enter an address and see a list of restaurants
within n-miles that address with filters applied. I will use the Geocoder gem to
calculate the distance and convert addresses into lat/ lng in the database.

The search form component will allow users to use a saved address or enter a new
one and enter search terms. At this point, they can only search restaurant name or
cuisine type, but phase three adds menu item search.

[Details][phase-two]

### Phase Three- Menu Items (1.5 days)
I will create the MenuItem model in this phase. I will create the view for a
a restaurant, which includes their details in a header and the menu beneath it.
I will update the search index to search by menu items.

I will seed the database with menus for the restaurants I created before.

[Details][phase-three]

### Phase Four- Orders (2 days)
I will create a shopping cart component that will live alongside the restaurant's
show view. I will create the Order model and api for create and show. In flux, I
will create an OrderItem store, and set up flux architecture for adding items to
an order and having the shopping cart update when an item is added. I will also
create an order detail view which users will see after placing an order. Users
will also be able to view previous orders on their account page now, where I will
add a component with an index view or previous orders that are clickable to bring
the user to the detail view of that order. At the end of this phase, users will
be able to create orders and view them.

[Details][phase-four]

### Phase Five- Addresses
In phase five, I will create the address model/ api to perform CRUD operations on
addresses. I will allow users to save addresses for future use, so they don't have
to reenter every time they make an order. In the user's account page, they will now
be able to manage addresses alongside their previous orders.

[Details][phase-five]

### Phase Six- Clean up CSS with complex styling/ email confirmations (1 day)
In this phase, I will make the site prettier. This is the phase that I will add
animations, such as the shopping cart popping out from the side of the screen and
giving user immediate feedback when they click a component. I will also send users
e-mail confirmation that their orders were received using Sendgrid.

At the end of this phase, I will have a complete app, where users can perform
CRUD operations on their account and create and read orders.

[Details][phase-six]

Bonus/ Todos
------------
  * Create form for restauranteurs to perform CRUD operations on menus
  * Add options to menu items
  * Pagination
  * Omniauth for authentication
  * Add user ratings

  [phase-one]: ./docs/phases/phase1.md
  [phase-two]: ./docs/phases/phase2.md
  [phase-three]: ./docs/phases/phase3.md
  [phase-four]: ./docs/phases/phase4.md
  [phase-five]: ./docs/phases/phase5.md
  [phase-six]: ./docs/phases/phase6.md
