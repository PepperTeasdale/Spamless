class RestaurantDetail < ActiveRecord::Base
  validates :restaurant_id, presence: true, uniqueness: true

  belongs_to :restaurant
end
