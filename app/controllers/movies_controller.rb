class MoviesController < ApplicationController

    def index
        render json: Movie.all, status: :ok
    end

    def adventure
        render json: Movie.joins(:genres).where(genres:{ genre: "Adventure"}).sort_by{|k| -k[:imdbRating]}.uniq, status: :ok
    end

    def animation
        render json: Movie.joins(:genres).where(genres:{ genre: "Animation"}).sort_by{|k| -k[:imdbRating]}.uniq, status: :ok
    end

    def drama
        render json: Movie.joins(:genres).where(genres:{ genre: "Drama"}).sort_by{|k| -k[:imdbRating]}.uniq, status: :ok
    end

    def action
        render json: Movie.joins(:genres).where(genres:{ genre: "Action"}).sort_by{|k| -k[:imdbRating]}.uniq, status: :ok
    end

    def comedy
        render json: Movie.joins(:genres).where(genres:{ genre: "Comedy"}).sort_by{|k| -k[:imdbRating]}.uniq, status: :ok
    end

    def thriller
        render json: Movie.joins(:genres).where(genres:{ genre: "Thriller"}).sort_by{|k| -k[:imdbRating]}.uniq, status: :ok
    end

   
end
