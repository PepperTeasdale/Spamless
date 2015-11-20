Rails.application.routes.draw do
  resources :menu_items
  resources :addresses
  resources :restaurant_details
  namespace :api, defaults: {format: :json} do
    resources :restaurants
    resources :registrations
    resources :menu_items, only: :show
  end

  devise_for :users, :controllers => {
    sessions: 'api/sessions',
    registrations: 'api/registrations'
  }

  root to: "static_pages#root"
end
