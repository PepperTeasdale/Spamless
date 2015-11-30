class DropRestaurantDetails < ActiveRecord::Migration
  def change
    drop_table :restaurant_details
  end
end
