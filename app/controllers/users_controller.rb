class UsersController < ApplicationController

    def create
        # byebug
        user=User.create!(user_params)
        session[:user_id]=user.id
        render json: user, status: :created
    end

    def show
        current_user = User.find_by(id: session[:user_id])
        render json: current_user, status: :ok
    end

    def faves
        user= User.find_by(id: session[:user_id])
        
        render json: user.favorites.map{|k| Movie.find(k.movie_id)}.uniq, status: :ok
    end

    def user_profiles
       
        user= User.find_by(id: session[:user_id])
        # byebug
        render json: user.profiles, status: :ok
    end

    

    private
    def user_params
        params.permit( :email, :password)
    end

    

end
