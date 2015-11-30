json.restaurants do
  json.array!(@restaurants) do |restaurant|
    json.partial!(
      'api/restaurants/restaurant',
      restaurant: restaurant,
      restaurant_show_page: false
    )
  end
end
