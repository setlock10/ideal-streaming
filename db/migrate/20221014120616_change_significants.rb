class ChangeSignificants < ActiveRecord::Migration[7.0]
  def change
    remove_column :significants, :name
    add_column :significants, :movie_id, :integer
    add_column :significants, :actor_id, :integer
    

  end
end
