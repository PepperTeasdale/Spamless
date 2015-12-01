json.extract! restaurant, :id, :name, :user_id
json.image_url asset_path(restaurant.image.url)


json.restaurant_detail do
  json.description restaurant.description
  json.cuisine_type restaurant.cuisine_type
end
json.address do
  json.extract! restaurant.address, :latitude, :longitude, :full_street_address
end

if restaurant_show_page
  json.menu_items do
    json.array!(restaurant.menu_items) do |menu_item|
      json.partial! 'api/menu_items/menu_item', menu_item: menu_item
    end
  end
end
