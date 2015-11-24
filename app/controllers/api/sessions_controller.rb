class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      render json: {}
    end

  end

  def create
    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if @user.nil?
      render json: { errors: ["Invalid credentials"] }, status: 401
    else
      sign_in!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
