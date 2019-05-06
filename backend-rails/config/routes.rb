Rails.application.routes.draw do
  resources :saved_drawings
  resources :users
  resources :canvas, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :messages

  mount ActionCable.server => '/cable'


end
