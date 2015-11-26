class Address < ActiveRecord::Base
  geocoded_by :full_street_address
  after_validation :geocode

  belongs_to :user
  has_one :restaurant

  def full_street_address
    address = [street_address, city, state].join(", ")
    "#{address} #{zipcode}"
  end
end
