json.extract! order,
  :id,
  :user_id,
  :restaurant_id,
  :order_items,
  :address

if :view_type == "index"
  json.restaurant do
    json.extract! order.restaurant, :name
  end
elsif :view_type == "show"
  json.restaurant do
    json.extract! order.restaurant, :name, :address
  end
end
