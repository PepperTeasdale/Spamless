class Api::RestaurantsController < ApplicationController
  def index
    if Geocoder.coordinates(params[:address]).nil?
      render json: { errors: ["Address not valid"] }, status: 400
    else
      distance = (params[:orderMethod] == "delivery" ? 2 : 4)
      @restaurants = Restaurant.near(params[:address], distance)
      @address = Geocoder.address(params[:address])
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.user_id = currentUser.id

    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :image, :address_id)
  end
end
