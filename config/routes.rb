Rails.application.routes.draw do
  resources :menu_items
  resources :restaurant_details
  namespace :api, defaults: {format: :json} do
    resources :restaurants
    resources :users, only: [:create, :show] do
      resources :orders, only: :index
      resources :addresses, only: [:index]
      member do
        get 'managed_restaurants'
      end
    end
    resources :addresses, only: [:create, :destroy, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :menu_items, only: :show
    resources :orders, only: [:create, :show]
  end

  root to: "static_pages#root"
end
