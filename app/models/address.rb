class Address < ActiveRecord::Base
  attr_reader :address, :city, :state, :zipcode
  geocoded_by :full_street_address
  after_validation :geocode

  belongs_to :user
  has_one :restaurant

  def full_street_address
    [self[:address], self[:city], self[:state], self[:zipcode]].join(", ")
  end
end
