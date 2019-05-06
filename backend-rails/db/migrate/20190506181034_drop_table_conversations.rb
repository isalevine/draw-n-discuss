class DropTableConversations < ActiveRecord::Migration[5.2]
  def change
    drop_table :conversations, force: :cascade
  end
end
