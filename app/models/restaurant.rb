class Restaurant < ActiveRecord::Base
  include PgSearch
  pg_search_scope :restaurant_search,
    against: [:name, :cuisine_type],
    associated_against: {
      menu_items: [:name, :description]
    }

  validates :name, presence: true, uniqueness: true
  validates :address_id, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  geocoded_by :full_street_address
  after_validation :geocode

  has_many :menu_items

  belongs_to :address
  belongs_to :user

  has_many :orders
  has_many :customers,
    through: :orders,
    source: :user

  def latitude
    address.latitude
  end

  def longitude
    address.longitude
  end

  def full_street_address
    self.address.full_street_address
  end
end
