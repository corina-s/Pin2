Rails.application.routes.draw do
  #Forward all requests to StaticController#index but requests
  #must be non-Ajax(!req.xhr?) and HTML Mime type (req.format.html?)
  #This does not include the root ("/") path
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  #Forward root to StaticController#index
  root 'static#index'
  namespace :v1, defaults: { format: 'json'} do
    get 'things', to: 'things#index'
  end
  devise_for :users
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
