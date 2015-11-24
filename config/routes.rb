Rails.application.routes.draw do
  resources :menu_items
  resources :addresses
  resources :restaurant_details
  namespace :api, defaults: {format: :json} do
    resources :restaurants
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :menu_items, only: :show
    resources :orders, only: [:create, :show, :index]
  end

  root to: "static_pages#root"
end
