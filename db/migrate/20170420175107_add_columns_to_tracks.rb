class AddColumnsToTracks < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :name, :string, null: false
    add_column :tracks, :lyrics, :text, null: false
    add_column :tracks, :description, :text
    add_column :tracks, :language, :string
    add_column :tracks, :artist, :string
  end
end
