class DropTableGameSessions < ActiveRecord::Migration[5.2]
  def change
    drop_table :game_sessions
  end
end
