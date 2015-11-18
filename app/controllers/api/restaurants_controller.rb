class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.near(params[:address], 2)
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
