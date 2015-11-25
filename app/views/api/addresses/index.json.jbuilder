json.addresses do
  json.array!(@addresses) do |address|
    json.partial!('address', address: address)
  end
end
