class MessagesController < ApplicationController

  def create
  end


  private

  def message_params
    params.require(:message).permit(:paths_text)
  end

end
