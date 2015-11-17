class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false, unique: true

      t.timestamps null: false
    end

    add_index :restaurants, :name
  end
end
