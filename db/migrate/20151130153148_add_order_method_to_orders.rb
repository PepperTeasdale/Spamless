class AddOrderMethodToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :order_method, :string
  end
end
