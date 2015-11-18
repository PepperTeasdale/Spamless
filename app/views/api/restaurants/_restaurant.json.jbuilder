json.extract! restaurant, :id, :name

if show_restaurant_details
  json.restaurant_details do
    json.array!(restaurant.restaurant_detail) do |detail|
      json.partial! 'restaurant_details/restaurant_details',
        restaurant_detail: @restaurant.restaurant_detail
    end
  end
else
  json.restaurant_details do
    json.array!(restaurant.restaurant_details) do |detail|
      json.partial! 'restaurant_details/restaurant_details',
        cuisine_type: @restaurant.restaurant_detail.cuisine_type
    end
  end
end
