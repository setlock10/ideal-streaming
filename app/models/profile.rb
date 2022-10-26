class Profile < ApplicationRecord
    belongs_to :user
    has_many :bookmarks
    has_many :movies, through: :bookmarks
end
