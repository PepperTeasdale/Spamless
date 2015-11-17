json.extract! restaurant, :id, :name

if show_restaurant_details
  json.restaurant_details do
    json.array!(restaurant.restaurant_details) do |details|
      json.partial! 'restaurant_details/restaurant_details',
        restaurant_details: @restaurant.restaurant_details

    end
  end
end
