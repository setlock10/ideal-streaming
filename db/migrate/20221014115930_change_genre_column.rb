class ChangeGenreColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :genres, :name
    add_column :genres, :genre, :string
  end
end
