Rails.application.routes.draw do
  resources :bookmarks, only:[:create,:destroy]
  resources :profiles
  resources :favorites, only:[:create,:destroy]
  resources :guests
  resources :categories
  resources :casts
  resources :genres, only: [:index, :show]
  resources :significants
  resources :movies, only: [:index]
  resources :actors, only: [:index]
  resources :sessions, only:[:create, :destroy]
  resources :users, only:[:create, :show]
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

  # USER Stuff
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/user/faves', to: 'users#faves'
  get '/profile/saved', to: 'profiles#saved'
  get '/user/profiles', to: 'users#user_profiles'
  get '/profile/:id', to: 'profiles#set_profile'



  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
