User.create!(
  fname: "Bobby",
  lname: "Digital",
  email: "fake@email.com",
  password: "password"
)

addresses = [
  ["622 Broadway", "New York", "NY", "10012"],
  ["600 Broadway", "New York", "NY", "10012"],
  ["274 Lafayette St", "New York", "NY", "10012"],
  ["295 Lafayette St", "New York", "NY", "10012"],
  ["1045 Flushing Ave", "Brooklyn", "NY", "11237"],
  ["2 Lexington Ave", "New York", "NY", "10010"],
  ["119 Waverly Pl", "New York", "NY", "10011"],
  ["178 7th Ave S"," New York", "NY", "10014"],
  ["201 Ninth Ave," "New York", "NY", "10011"],
  ["96 Lafayette St," "New York", "NY", "10013"],
  ["158 Ludlow St," "New York", "NY", "10002"],
  ["535 E 6th St"," New York", "NY", "10009"],
  ["101 St Marks Pl"," New York", "NY", "10009"],
  ["307 E 14th St"," Manhattan," "NY", "10019"],
  ["175 5th Ave," "New York", "NY", "10010"],
  ["220 W 23rd St", "New York", "NY", "10011"]
]

addresses.each do |address|
  Address.create!(
    address: address[0],
    city: address[1],
    state: address[2],
    zipcode: address[3],
    phone: 555-555-5555
  )
end

restaurants = [
  ["Jamón Especiado", "Spanish", "Tapas, wine and spam"],
  ["Gewürzschinken", "German", "Fantastisch bier und spam!"],
  ["Onomea", "Hawaiian", "Wonderful tropical ambiance"],
  ["Fawlty Towers", "English", "Cozy BnB with an eccentric owner"],
  ["King Spam", "Southeast Asian", "Flavor, spam"],
  ["Spam-itkopita", "Greek", "Famous for their spam gyros!"],
  ["Not Another Spam Restaurant", "American", "Really, just another spam restaurant"],
  ["Impastable", "Italian", "Barely edible, highly recommended!"]
]

restaurants.each_with_index do |restaurant, idx|
  Restaurant.create!(name: restaurant[0], address_id: idx + 1)
  RestaurantDetail.create!(
    restaurant_id: Restaurant.last.id,
    cuisine_type: restaurant[1],
    description: restaurant[2]
  )
  sleep(2)
end

sleep(2)

restaurants.each_with_index do |restaurant, idx|
  Restaurant.create!(name: restaurant[0] + " 2", address_id: idx + 9)
  RestaurantDetail.create!(
    restaurant_id: Restaurant.last.id,
    cuisine_type: restaurant[1],
    description: restaurant[2]
  )
  sleep(2)
end

menu_items = [
  ["Spam, eggs and spam", 3.5, "Breakfast", "Yums!"],
  ["Spam, eggs sausage and spam", 4.5, "Breakfast", "Yum yums!"],
  ["Spam-ghetti", 9.0, "Lunch", "Yums!"],
  ["Spam on Rye", 7.0, "Lunch", "Yums!"],
  ["Spam latte", 4.5, "Beverage", "Yums!"],
  ["Spam soda", 1.5, "Beverage", "Yums!"]
]

5.times do |idx|
  menu_items.each do |item|
    MenuItem.create!(
      name: item[0], price: item[1], restaurant_id: idx + 1,
      menu_category: item[2], description: item.last
    )
  end
end
