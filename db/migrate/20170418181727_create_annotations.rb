class CreateAnnotations < ActiveRecord::Migration[5.0]
  def change
    create_table :annotations do |t|

      t.timestamps
    end
  end
end
