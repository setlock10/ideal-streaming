class ChangeGenres < ActiveRecord::Migration[7.0]
  def change
    remove_column :categories, :actor_id
    add_column :categories, :genre_id, :integer

  end
end
