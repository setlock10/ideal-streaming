class ActorSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :movies
end
