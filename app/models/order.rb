class Order < ActiveRecord::Base
  validates :user_id, :restaurant_id, :order_items, :address, :contact, presence: true

  belongs_to :user
  belongs_to :restaurant
end
