Rails.application.routes.draw do
  resources :guests
  resources :categories
  resources :casts
  resources :genres, only: [:index, :show]
  resources :significants
  resources :movies, only: [:index]
  resources :actors, only: [:index]
  resources :users
  resources :sessions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  get '/adventure', to: 'movies#adventure'
  get '/animation', to: 'movies#animation'
  get '/drama', to: 'movies#drama'
  get '/action', to: 'movies#action'
  get '/comedy', to: 'movies#comedy'
  get '/thriller',to:'movies#thriller'



  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
