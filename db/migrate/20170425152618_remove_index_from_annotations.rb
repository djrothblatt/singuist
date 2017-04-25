class RemoveIndexFromAnnotations < ActiveRecord::Migration[5.0]
  def change
    remove_index :annotations, :user_id
    remove_index :annotations, :track_id
    add_index :annotations, :track_id
    add_index :annotations, :user_id
  end
end
