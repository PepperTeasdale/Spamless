json.array!(@restaurants) do |restaurant|
  json.partial!(
    'restaurant',
    restaurant: restaurant,
    show_restaurant_detail: false
  )
end