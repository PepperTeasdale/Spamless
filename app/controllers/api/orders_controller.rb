class Api::OrdersController < ApplicationController
  def show
    @order = Order.find(params[:id])
  end

  def create
    @order = Order.new(order_params)

    if @order.save
      @user = User.find(params[:order][:user_id])
      @restaurant = Restaurant.find(params[:order][:restaurant_id])
      OrderConfirmationMailer.confirm_order(@user, @restaurant).deliver

      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def index
    @orders = Order.where(user_id: params[:user_id])
  end

  private

  def order_params
    order_items = {
      order_items: [:id, :restaurant_id, :name, :menu_category, :price, :qty, :description]
    }
    contact = {contact: [:fname, :lname]}
    params
      .require(:order)
      .permit(:user_id, :restaurant_id, :address, :order_method,
              order_items, contact)
  end
end
