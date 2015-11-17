class Restaurant < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_one :restaurant_detail
end
