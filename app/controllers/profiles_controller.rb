class ProfilesController < ApplicationController

    def saved
        
        render json: Profile.find_by(id: session[:profile_id]).bookmarks.map{|k| Movie.find(k.movie_id)}.uniq, status: :ok
    end

    def set_profile

        profile=Profile.find_by(id: params[:id])

        session[:profile_id]=params[:id]
        
        render json: profile, status: :ok


    end

    
    

end
