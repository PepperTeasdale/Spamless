json.restaurants do
  json.array!(@restaurants) do |restaurant|
    byebug
    json.partial!(
      'api/restaurants/restaurant',
      restaurant: restaurant
    )
  end
end
