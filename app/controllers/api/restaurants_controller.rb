class Api::RestaurantsController < ApplicationController
  def index

    if Geocoder.coordinates(params[:address]).nil?
      render json: { errors: ["Address not valid."]}
    else
      distance = (params[:orderMethod] == "delivery" ? 3 : 5)
      @restaurants = Restaurant.near(params[:address], distance)
      @address = Geocoder.address(params[:address])
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
