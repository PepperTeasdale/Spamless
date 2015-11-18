class Api::RestaurantsController < ApplicationController
  def index
    distance = (params[:orderMethod] == "delivery" ? 3 : 10)
    @restaurants = Restaurant.near(params[:address], distance)
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
