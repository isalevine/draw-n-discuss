class SavedDrawingsController < ApplicationController

  def index
    drawings = SavedDrawing.all
    drawing_list = []
    drawings.each do |drawing|
      json = ActiveSupport::JSON.decode(drawing.paths_text)
      drawing_list << json
    end
    render json: drawing_list
  end

  def create
    encodedString = ActiveSupport::JSON.encode(params)
    @drawing = SavedDrawing.new(paths_text: encodedString)
    if @drawing.save
      puts "SAVED SAVED SAVED SAVED SAVED!!!!!!!!!!!!!"
    end
  end

end
