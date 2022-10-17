class MovieSerializer < ActiveModel::Serializer
  attributes :title, :imdbRating, :imdbVoteCount, :backdropURL, :year, :runtime, :overview, :tagline, :posterURL, :age, :originalLanguage, :actor_names, :guest_names, :genre_names

  # has_many :actors #, serializer: MovieActorSerializer
  # has_many :guests
  # has_many :genres

  def actor_names
    # byebug
    object.actors.pluck(:name).uniq
  end

  def guest_names
    # byebug
    object.guests.pluck(:name).uniq
  end

  def genre_names
    # byebug
    object.genres.pluck(:genre).uniq
  end

  
  

end
