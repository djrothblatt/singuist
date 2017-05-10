class Api::UpvotesController < ApplicationController
  def create
    @upvote = Upvote.new(upvote_params)

    if @upvote.save
      render json: @upvote.annotation.id
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def destroy
    annotation_id = @upvote.annotation.id
    @upvote = Upvote.find(params[:id])
    @upvote.destroy
    render json: annotation_id
  end

  private

  def upvote_params
    params.require(:upvote).permit([:annotation_id, :user_id])
  end
end
