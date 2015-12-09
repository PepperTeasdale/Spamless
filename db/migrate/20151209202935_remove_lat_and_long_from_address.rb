class RemoveLatAndLongFromAddress < ActiveRecord::Migration
  def change
    remove_column :addresses, :latitude
    remove_column :addresses, :longitude
  end
end
