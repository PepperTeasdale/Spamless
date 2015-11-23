class AddContactToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :contact, :json, null: false
  end
end
