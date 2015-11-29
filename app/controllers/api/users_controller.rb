class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      render 'api/users/show'
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def managed_restaurants
    user = User.find(params[:id])
    @restaurants = user.restaurants
    render :managed_restaurants
  end

  private

  def user_params
    params.require(:user).permit(:password, :email, :fname, :lname)
  end
end
