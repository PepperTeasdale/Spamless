class Api::RestaurantsController < ApplicationController
  def index
    if Geocoder.coordinates(params[:address]) == nil
      render json: { errors: ["Address not valid."]}
    else
      distance = (params[:orderMethod] == "delivery" ? 3 : 10)
      @restaurants = Restaurant.near(params[:address], distance)
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
