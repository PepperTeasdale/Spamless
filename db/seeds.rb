User.create!(
  fname: "Bobby",
  lname: "Digital",
  email: "fake@email.com",
  password: "password"
)

# 622 Broadway, New York, NY 10012
addresses = [
  ["622 Broadway", "New York", "NY", "10012", "555-555-5555"],
  ["600 Broadway", "New York", "NY", "10012", "555-555-5555"],
  ["274 Lafayette St", "New York", "NY", "10012", "555-555-5555"],
  ["295 Lafayette St", "New York", "NY", "10012", "555-555-5555"],
  ["1045 Flushing Ave", "Brooklyn", "NY", "11237", "555-555-5555"]
]

addresses.each do |address|
  Address.create!(
    address: address[0],
    city: address[1],
    state: address[2],
    zipcode: address[3],
    phone: address[4]
  )
end

restaurants = [
  ["Jamón Especiado", "Spanish", "Tapas, wine and spam"],
  ["Gewürzschinken", "German", "Fantastisch bier und spam!"],
  ["Onomea", "Hawaiian", "Wonderful tropical ambiance"],
  ["Fawlty Towers", "English", "Cozy BnB with an eccentric owner"],
  ["King Noodle", "Southeast Asian", "Flavor, spam"]
]

restaurants.each_with_index do |restaurant, idx|
  Restaurant.create!(name: restaurant[0], address_id: idx + 1)
  RestaurantDetail.create!(
    restaurant_id: Restaurant.last.id,
    cuisine_type: restaurant[1],
    description: restaurant[2]
  )
end
