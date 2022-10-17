class Guest < ApplicationRecord
    has_many :significants
    has_many :movies, through: :significants

end
