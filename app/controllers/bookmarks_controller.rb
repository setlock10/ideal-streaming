class BookmarksController < ApplicationController
    def create

        
        params_all[:profile_id]=session[:profile_id]
        
        render json: Bookmark.create!(params_all), status: :created
    end

    def destroy
        Bookmark.delete(params[:id])
        head :no_content
    end



    private
    def params_all
        params.permit([:profile_id ,:movie_id])
    end



end
