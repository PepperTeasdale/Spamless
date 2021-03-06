class Api::RestaurantsController < ApplicationController
  def index
    if Geocoder.coordinates(params[:address]).nil?
      render json: { errors: ["Address not valid"] }, status: 400
    else
      distance = (params[:orderMethod] == "delivery" ? 2 : 4)
      @restaurants = Restaurant
                       .near(params[:address], distance)
                       .includes(:address)

      if params[:query]
        @restaurants = @restaurants.restaurant_search(params[:query])
      end

      @address = Geocoder.address(params[:address])
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.user_id = current_user.id

    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  private

  def restaurant_params
    params
      .require(:restaurant)
      .permit(:name, :image, :address_id, :cuisine_type, :description)
  end
end
