class MenuItem < ActiveRecord::Base
  validates :name, :restaurant_id, :price, :menu_category, presence: true

  belongs_to :restaurant
end
