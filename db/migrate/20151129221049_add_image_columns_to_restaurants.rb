class AddImageColumnsToRestaurants < ActiveRecord::Migration
  def up
    add_attachment :restaurants, :image
  end

  def down
    remove_attachment :restaurants, :image
  end
end
