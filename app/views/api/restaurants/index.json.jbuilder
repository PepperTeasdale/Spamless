json.restaurants do
  json.array!(@restaurants) do |restaurant|
    json.partial!(
      'restaurant',
      restaurant: restaurant,
      restaurant_show_page: false
    )
  end
end

json.address @address
