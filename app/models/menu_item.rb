class MenuItem < ActiveRecord::Base
  validates :name, :restaurant_id, :price, :menu_category, presence: true
  validate :menu_item_must_contain_spam

  belongs_to :restaurant

  private

  def menu_item_must_contain_spam
    contains_spam = name.match(/spam/i) || description.match(/spam/i)
    message = "seems to be missing an ingredient (hint: what's the name of this app?)"
    unless contains_spam
      errors.add(:menu_item, message)
    end
  end
end
