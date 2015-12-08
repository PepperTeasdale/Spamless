Rails.application.routes.draw do
  resources :restaurant_details
  namespace :api, defaults: {format: :json} do
    resources :restaurants
    resources :menu_items, only: [:show, :create]
    resources :users, only: [:create, :show] do
      resources :orders, only: :index
      resources :addresses, only: [:index]
      member do
        get 'managed_restaurants'
      end
    end
    resources :addresses, only: [:create, :destroy, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :orders, only: [:create, :show]
  end

  root to: "static_pages#root"
end
