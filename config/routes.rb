Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tracks, except: [:edit, :new] do
      resources :annotations, only: [:index]
    end
    resources :annotations, only: [:create, :update, :destroy, :show]
    resources :upvotes, only: [:create, :destroy]
  end
end
