class ChangeOrderAddressColumn < ActiveRecord::Migration
  def change
    change_column :orders, :address, :string
  end
end
