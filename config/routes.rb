Rails.application.routes.draw do
	get '/', to: 'index#home'
  get 'index/home'
  get 'shop', to: 'index#shop'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
