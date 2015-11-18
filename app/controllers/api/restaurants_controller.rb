class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.near(params[:address], 3)
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
