class MoveRestaurantDetailsToRestaurantTable < ActiveRecord::Migration
  def change
    add_column :restaurants, :cuisine_type, :string
    add_column :restaurants, :description, :text
  end
end
