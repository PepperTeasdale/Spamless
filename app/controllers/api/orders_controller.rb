class Api::OrdersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def show
    @order = Order.find(params[:id])
  end

  def create
    @order = Order.new(order_params)

    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def index
    @orders = Order.where(user_id: params[:user_id])
  end

  def order_params
    order_items = {
      order_items: [:id, :restaurant_id, :name, :menu_category, :price, :qty, :description]
    }
    contact = {contact: [:fname, :lname]}
    address = { address: [:street_address, :city, :state, :zipcode, :user_id]}
    params
      .require(:order)
      .permit(:user_id, :restaurant_id, address, order_items, contact)
  end
end
