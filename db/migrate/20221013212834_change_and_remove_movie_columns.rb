class ChangeAndRemoveMovieColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :movies, :cast
    change_column :movies, :overview, :text
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
