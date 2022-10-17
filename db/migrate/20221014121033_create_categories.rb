class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.integer :actor_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
