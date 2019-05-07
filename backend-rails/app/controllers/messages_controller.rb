class MessagesController < ApplicationController

  def index
    @messages = Message.all
    render json: @messages
  end

  def show
    @message = Message.find(params[:id])
    render json: @message
  end

  def create
    @message = Message.create(message_params)
    ActionCable.server.broadcast 'message_channel', params
    render json: @message
  end

  def update
    @message = Message.find(params[:id])
    @message.update(message_params)
    render json: @message
  end

  private

  def message_params
    params.require(:message).permit(:text, :user_id)
  end


end
