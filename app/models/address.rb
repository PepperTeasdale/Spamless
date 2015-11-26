class Address < ActiveRecord::Base
  attr_reader :street_address, :city, :state, :zipcode
  geocoded_by :full_street_address
  after_validation :geocode

  belongs_to :user
  has_one :restaurant

  def full_street_address
    address = [self[:street_address], self[:city], self[:state]].join(", ")
    "#{address} #{self[:zipcode]}"
  end
end
