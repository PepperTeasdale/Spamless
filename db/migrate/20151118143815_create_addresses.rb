class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.float :latitude
      t.float :longitude

      t.text :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :phone

      t.timestamps null: false
    end

    add_column :restaurants, :address_id, :integer, null: false
  end
end
