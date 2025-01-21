Rails.application.routes.draw do
  # get "home/index"

  root "home#index"

  #creating question routes (like api/v1/questions is the route here declared)
  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index] do
        member do
          put :updateCount   #(api/v1/questions/id/updateCount is route. here we are declaring another route for updating the count. updateCount is the method available in controller)
        end
      end
    end
  end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
