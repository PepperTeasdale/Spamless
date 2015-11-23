class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.json :order_items, null: false
      t.json :address, null: false

      t.timestamps null: false
    end

    add_index :orders, :user_id
    add_index :orders, :restaurant_id
  end
end
