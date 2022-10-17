class MovieActorSerializer < ActiveModel::Serializer
  attributes :name_only
  def name_only
    # byebug
    object.name

  end
end
