json.extract! restaurant, :id, :name
json.image_url asset_path(restaurant.image.url)


if restaurant_show_page
  json.restaurant_detail do
    json.partial! 'api/restaurant_details/restaurant_detail',
      restaurant_detail: restaurant.restaurant_detail
  end
  json.menu_items do
    json.array!(restaurant.menu_items) do |menu_item|
      json.partial! 'api/menu_items/menu_item', menu_item: menu_item
    end
  end
  json.address do
    json.extract! restaurant.address, :latitude, :longitude, :full_street_address
  end
else
  json.restaurant_detail do
    json.extract! restaurant.restaurant_detail, :cuisine_type
  end

  json.address do
    json.extract! restaurant.address, :latitude, :longitude, :full_street_address
  end
end
