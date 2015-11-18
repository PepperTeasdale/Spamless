class Address < ActiveRecord::Base
  attr_reader :address, :city, :state, :zipcode
  geocoded_by :full_street_address
  after_validation :geocode

  def full_street_address
    [self[:address], self[:city], self[:state], self[:zipcode]].join(", ")
  end
end
