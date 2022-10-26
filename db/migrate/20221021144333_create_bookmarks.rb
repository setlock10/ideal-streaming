class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.integer :profile_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
