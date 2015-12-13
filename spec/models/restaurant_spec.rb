require 'spec_helper'


describe Restaurant do
  before(:each) do
    @address = Address.create(
      street_address: "598 Broadway",
      city: "New York",
      state: "New York",
      zipcode: "10012"
    )

    @restaurant = Restaurant.create(
      name: "Spamalot",
      address_id: @address.id
    )
  end

  it "generates a readable address" do
    expect(@restaurant.full_street_address).to eq("598 Broadway, New York, New York 10012")
  end

  it "initializes with latitude and longitude for geolocation" do
    expect(@restaurant.latitude).to be_within(0.000001).of(40.724937438964844) 
    expect(@restaurant.longitude).to be_within(0.000001).of(-73.99659729003906)
  end
end
