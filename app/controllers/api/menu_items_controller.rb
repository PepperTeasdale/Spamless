class Api::MenuItemsController < ApplicationController
  def create
    @menu_item = MenuItem.new(menu_item_params)

    if @menu_item.save
      render :show
    else
      render json: @menu_item.errors.full_messages, status: 422
    end
  end

  private

  def menu_item_params
    params.require(:menu_item).permit(:name, :description, :price,
                                      :menu_category, :restaurant_id)
  end
end
