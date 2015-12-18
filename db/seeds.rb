User.create!(
  fname: "John",
  lname: "Cleese",
  email: "cleese@pythons.com",
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
  ["220 W 23rd St", "New York", "NY", "10011"],
  ["550 Madison Ave", "New York", "NY", "10022"],
  ["405 W 59th St", "New York", "NY", "10023"],
  ["154 E 79th St", "New York", "NY", "10075"],
  ["211 W 61st St", "New York", "NY", "10023"]
]

addresses.each do |address|
  Address.create!(
    street_address: address[0],
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
  ["Impastable", "Italian", "Barely edible, highly recommended!"],
  ["Spam Por Favor!", "Spanish", "Guess what they sell here?"],
  ["Spam Für Dich!", "German", "Einmal spam, bitte!"]
]

restaurants.each_with_index do |restaurant, idx|
  Restaurant.create!(
    name: restaurant[0],
    address_id: idx + 1,
    cuisine_type: restaurant[1],
    description: restaurant[2]
  )
  # To avoid going over google geocoding api query limit.
  sleep(1)
end


restaurants.each_with_index do |restaurant, idx|
  Restaurant.create!(
    name: restaurant[0] + "2",
    address_id: idx + 11,
    cuisine_type: restaurant[1],
    description: restaurant[2]
  )
  sleep(1)
end

menu_items = [
  ["Spam, eggs and spam", 3.5, "Breakfast", "Yums!"],
  ["Spam, eggs sausage and spam", 4.5, "Breakfast", "Yum yums!"],
  ["Spam-ghetti", 9.0, "Lunch", "You know you want it"],
  ["Spam on Rye", 7.0, "Lunch", "Bukowski-esque"],
  ["Spam latte", 4.5, "Beverage", "Foamy spam coffee"],
  ["Spam soda", 1.5, "Beverage", "Refreshing and bubbly"],
  ["Just a can of spam", 3.0, "Lunch", "How can you improve on perfection?"],
  ["Spam fried rice", 8.0, "Dinner", "This one actually does taste good"],
  ["Musubi", 6.0, "Appetizer", "Like sushi, but better ()"],
  ["Small can of spam", 2.0, "Lunch", "If you don't want that much spam"],
  ["Teriyaki Spam", 9.0, "Dinner", "Served with side of regular spam"],
  ["Spamburger", 10.0, "Dinner", "Where's the beef? Not here!"],
  ["Spam fritters", 5.0, "Appetizer", "Crunchy and spammy"],
  ["Faux-spam", 7.0, "Dinner", "Vegetarian spam drenched in spam foam"]
]

20.times do |idx|
  menu_items.each do |item|
    MenuItem.create!(
      name: item[0], price: item[1], restaurant_id: idx + 1,
      menu_category: item[2], description: item.last
    )
  end
end
