class CreateMenuItems < ActiveRecord::Migration
  def change
    create_table :menu_items do |t|
      t.integer :restaurant_id, null: false
      t.float :price, null: false
      t.string :name, null: false
      t.text :description
      t.string :menu_category, null: false

      t.timestamps null: false
    end

    add_index :menu_items, :restaurant_id
    add_index :menu_items, :menu_category
  end
end
