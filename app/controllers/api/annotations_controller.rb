class Api::AnnotationsController < ApplicationController
  def index
    @track = Track.find(params[:track_id])
    @annotations = @track.annotations
    
    render :index
  end

  def show
    @annotation = Annotation.find(params[:id])

    render :show
  end

  def create
    @annotation = Annotation.new(annotation_params)

    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages
    end
  end

  def update
    @annotation = Annotation.find(params[:id])

    if @annotation.update(annotation_params)
      render :show
    else
      render json: @annotation.errors.full_messages
    end
  end

  def destroy
    @annotation = Track.find(params[:id])
    @annotation.destroy
    render :index
  end
  
  private
  def annotation_params
    params.require(:annotation).permit(:track_id, :user_id, :body, :start_index, :end_index)
  end
end
