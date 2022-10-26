class ChangeProfileColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :profiles, :movie_id

  end
end
