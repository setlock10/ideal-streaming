class Actor < ApplicationRecord
    has_many :casts
    has_many :movies, through: :casts
    # has_many :significants
    # has_many :movies, through: :significants

end
