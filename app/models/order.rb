class Order < ActiveRecord::Base
  validates :user_id, :restaurant_id, :order_method,
            :order_items, :address, :contact, presence: true
  validate :ensure_valid_address
  validate :ensure_address_near_restaurant

  belongs_to :user
  belongs_to :restaurant

  private
  def ensure_valid_address
    if Geocoder.address(address).nil?
      errors.add(:address, "is not valid")
    end
  end

  def ensure_address_near_restaurant
    distance = Restaurant.find(restaurant_id).distance_to(address)
    max_distance = (order_method == "delivery" ? 2 : 4)
    if distance > max_distance
      errors.add(:address, "out of range for #{order_method}")
    end
  end
end
