class DropConversationFromMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :conversation_id
  end
end
