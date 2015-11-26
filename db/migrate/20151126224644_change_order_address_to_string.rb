class ChangeOrderAddressToString < ActiveRecord::Migration
  def change
    change_column :orders, :address, :string
  end
end
