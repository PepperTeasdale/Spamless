Schema
------

### users
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>encrypted_password</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>reset_password_token</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>reset_password_sent_at</td>
      <td>datetime</td>
      <td></td>
    </tr>
    <tr>
      <td>remember_created_at</td>
      <td>datetime</td>
      <td></td>
    </tr>
    <tr>
      <td>sign_in_count</td>
      <td>integer</td>
      <td>not null, default: 0</td>
    </tr>
    <tr>
      <td>current_sign_in_at</td>
      <td>datetime</td>
      <td></td>
    </tr>
    <tr>
      <td>last_sign_in_at</td>
      <td>datetime</td>
      <td></td>
    </tr>
    <tr>
      <td>current_sign_in_ip</td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td>last_sign_in_ip</td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>email</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>name</td>
      <td>string</td>
      <td>not null</td>
    </tr>
  </tbody>
</table>

### restaurants
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>name</td>
      <td>string</td>
      <td>not null, indexed, unique</td>
    </tr>
    <tr>
      <td>address_id</td>
      <td>integer</td>
      <td>not null, foreign key, indexed</td>
    </tr>
  </tbody>
</table>

### restaurant_details
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
    <tr>
      <td>restaurant_id</td>
      <td>integer</td>
      <td>not null, foreign key, primary key</td>
    </tr>
    <tr>
      <td>description</td>
      <td>text</td>
      <td></td>
    </tr>
    <tr>
      <td>phone</td>
      <td>integer</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>logo_url</td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td>open_time</td>
      <td>time</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>close_time</td>
      <td>time</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>price</td>
      <td>integer</td>
      <td>not null, between 1 and 5</td>
    </tr>
    <tr>
      <td>delivery_minimum</td>
      <td>integer</td>
      <td></td>
    </tr>
    <tr>
      <td>maximum_wait</td>
      <td>integer</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>delivery_fee</td>
      <td>float</td>
      <td></td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>


### addresses
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>city</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>state</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>street_address</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>zip</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>lat</td>
      <td>float</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>lng</td>
      <td>float</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>name</td>
      <td>string</td>
      <td>not null, default: 'other'</td>
    </tr>
    <tr>
      <td>special_instructions</td>
      <td>text</td>
      <td></td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>integer</td>
      <td>foreign key</td>
    </tr>
  </tbody>
</table>

### orders
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>primary key, not null</td>
    </tr>
    <tr>
      <td>customer_id</td>
      <td>integer</td>
      <td>not null, foreign key, references user</td>
    </tr>
    <tr>
      <td>address_id</td>
      <td>integer</td>
      <td>not null, foreign key, references address</td>
    </tr>
    <tr>
      <td>restaurant_id</td>
      <td>integer</td>
      <td>not null, foreign key</td>
    </tr>
    <tr>
      <td>status</td>
      <td>string</td>
      <td>not null, default: "pending"</td>
    </tr>
  </tbody>
</table>

### order_items
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>primary key, not null</td>
    </tr>
    <tr>
      <td>menu_item_id</td>
      <td>integer</td>
      <td>foreign key, not null</td>
    </tr>
    <tr>
      <td>qty</td>
      <td>integer</td>
      <td>not null, default: 1</td>
    </tr>
    <tr>
      <td>special_instructions</td>
      <td>text</td>
      <td></td>
    </tr>
  </tbody>
</table>


### menu_items
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>restaurant_id</td>
      <td>integer</td>
      <td>not null, foreign key, indexed</td>
    </tr>
    <tr>
      <td>restaurant_id</td>
      <td>integer</td>
      <td>not null, foreign key, indexed</td>
    </tr>
    <tr>
      <td>price</td>
      <td>integer</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>name</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>description</td>
      <td>text</td>
      <td></td>
    </tr>
    <tr>
      <td>menu_category</td>
      <td>string</td>
      <td>not null, indexed</td>
    </tr>
  </tbody>
</table>

***
## If there's time

### item_option_categories
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
<table>
<table>
  <tr>
    <td>id</td>
    <td>menu_item_id</td>
    <td>name</td>
    <td>max_selections</td>
    <td>required</td>
    <td>price</td>
  </tr>
  <tr>
    <td>integer</td>
    <td>integer</td>
    <td>string</td>
    <td>integer</td>
    <td>boolean</td>
    <td>float</td>
  </tr>
</table>

### menu_item_options
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
<table>
  <tr>
    <td>id</td>
    <td>item_option_category_id</td>
    <td>name</td>
    <td>price</td>
  </tr>
  <tr>
    <td>integer</td>
    <td>integer</td>
    <td>string</td>
    <td>float</td>
  </tr>
</table>

### reviews
<table>
  <thead>
    <tr>
      <td>column name</td>
      <td>data type</td>
      <td>details</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>integer</td>
      <td>not null, foreign key, indexed</td>
    </tr>
    <tr>
      <td>restaurant_id</td>
      <td>integer</td>
      <td>not null, foreign key, indexed</td>
    </tr>
    <tr>
      <td>rating</td>
      <td>integer</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>description</td>
      <td>text</td>
      <td></td>
    </tr>
  </tbody>
</table>
