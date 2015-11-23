class Restaurant < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :address_id, presence: true

  geocoded_by :full_street_address
  after_validation :geocode

  has_many :menu_items
  has_one :restaurant_detail
  belongs_to :address
  has_many :orders
  has_many :customers,
    through: :orders,
    source: :user

  def latitude
    address.latitude
  end

  def longitude
    address.longitude
  end

  def full_street_address
    self.address.full_street_address
  end
end
