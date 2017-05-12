class RemoveUniquenessFromUpvotes < ActiveRecord::Migration[5.0]
  def change
    remove_index :upvotes, :user_id
    remove_index :upvotes, :annotation_id

    add_index :upvotes, :annotation_id
    add_index :upvotes, :user_id
  end
end
