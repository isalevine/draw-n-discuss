class CreateSavedDrawings < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_drawings do |t|
      t.text :paths_text

      t.timestamps
    end
  end
end
