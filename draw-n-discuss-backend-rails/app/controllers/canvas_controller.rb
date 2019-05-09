class CanvasController < ApplicationController

  def create
    ActionCable.server.broadcast 'canvas_channel', params
  end
end
