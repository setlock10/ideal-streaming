class Movie < ApplicationRecord
    has_many :casts
    has_many :actors, through: :casts
    has_many :significants
    has_many :guests, through: :significants
    has_many :categories
    has_many :genres, through: :categories
    has_many :favorites
    has_many :users, through: :favorites
    has_many :bookmarks
    has_many :profiles, through: :bookmarks

end
