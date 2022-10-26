class FavoritesController < ApplicationController

    def create
        
        render json: Favorite.create!(fav_params), status: :created
    end

    def destroy
        Favorite.delete(params[:id])
        head :no_content
    end



    private
    def fav_params
        params.permit(:user_id, :movie_id)
    end


end
