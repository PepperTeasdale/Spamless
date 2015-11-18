Rails.application.routes.draw do
  resources :addresses
  resources :restaurant_details
  namespace :api, defaults: { format: :json } do
    resources :restaurants
  end
  devise_for :users
  root to: "static_pages#root"
end
