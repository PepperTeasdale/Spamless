json.extract! restaurant, :id, :name


if show_restaurant_detail
  json.restaurant_detail do
    json.partial! 'api/restaurant_details/restaurant_details',
      restaurant_detail: restaurant.restaurant_detail
  end
else
  json.restaurant_detail do
    json.extract! restaurant.restaurant_detail, :cuisine_type
  end

  json.address do
    json.extract! restaurant.address, :latitude, :longitude
  end
end
