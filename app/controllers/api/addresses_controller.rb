class Api::AddressesController < ApplicationController
  def show
    @address = Address.find(params[:id])
  end

  def create
    @address = Address.new(address_params)

    if @address.save
      render :show
    else
      render json: @address.errors.full_messages, status: 422
    end
  end

  def index
    @addresses = Address.where(user_id: params[:user_id])
  end

  def destroy
    @address = Address.find(params[:id])

    if @address.destroy
      render :show
    else
      render json: @address.errors.full_messages, status: 400
    end
  end

  def update
    @address = Address.find(params[:id])

    if @address.update(address_params)
      render :show
    else
      render json: @address.errors.full_messages, status: 400
    end
  end

  private

  def address_params
    params
      .require(:address)
      .permit(:street_address, :city, :state, :zipcode, :user_id)
  end
end
