class CreateRestaurantDetails < ActiveRecord::Migration
  def change
    create_table :restaurant_details do |t|
      t.integer :restaurant_id, null: false, unique: true
      t.text :description
      t.text :cuisine_type

      t.timestamps null: false
    end
  end
end
