class ChangeSignificantsAgain < ActiveRecord::Migration[7.0]
  def change
    remove_column :significants, :actor_id
    add_column :significants, :guest_id, :integer


  end
end
