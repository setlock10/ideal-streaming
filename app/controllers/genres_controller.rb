class GenresController < ApplicationController
    def index
        render json: Genre.all, status: :ok
    end

    def show
        render json: Genre.find(params[:id]).movies, status: :ok
    end
end
