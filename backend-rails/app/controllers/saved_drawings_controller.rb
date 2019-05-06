class SavedDrawingsController < ApplicationController

  def index
    @drawings = SavedDrawing.all
    render json: @drawings
  end

  def create
    encodedString = ActiveSupport::JSON.encode(params)
    @drawing = SavedDrawing.new(paths_text: encodedString)
    if @drawing.save
      puts "SAVED SAVED SAVED SAVED SAVED!!!!!!!!!!!!!"
    end
  end

end
