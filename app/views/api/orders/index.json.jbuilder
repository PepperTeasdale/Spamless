json.orders do
  json.array!(@orders) do |order|
    json.partial!('order', order: order, view_type: "index")

    json.restaurant order.restaurant
  end
end
