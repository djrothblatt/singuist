class AddFieldsToAnnotations < ActiveRecord::Migration[5.0]
  def change
    add_column :annotations, :track_id, :integer, null: false
    add_column :annotations, :user_id, :integer, null: false
    add_column :annotations, :body, :text, null: false
    add_column :annotations, :start_index, :integer, null: false
    add_column :annotations, :end_index, :integer, null: false
    add_index :annotations, :track_id, unique: true
    add_index :annotations, :user_id, unique: true
  end
end
