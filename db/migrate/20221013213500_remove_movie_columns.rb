class RemoveMovieColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :movies, :video
  end
end
