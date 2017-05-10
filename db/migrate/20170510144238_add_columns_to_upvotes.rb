class AddColumnsToUpvotes < ActiveRecord::Migration[5.0]
  def change
    add_column :upvotes, :annotation_id, :integer, null: false
    add_column :upvotes, :user_id, :integer, null: false

    add_index :upvotes, :annotation_id, unique: true
    add_index :upvotes, :user_id, unique: true
  end
end
