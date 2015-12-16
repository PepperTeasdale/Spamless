class OrderConfirmationMailer < ApplicationMailer
  default from: 'orders@spam-less.com'

  def confirm_order(user, restaurant)
    @user, @restaurant = user, restaurant
    mail(
      to: @user.email,
      subject: "Your Spamless Order from #{@restaurant.name} is in the Works"
    )
  end
end
