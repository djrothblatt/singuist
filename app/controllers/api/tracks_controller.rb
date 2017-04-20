class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages
    end
  end
  
  def update
    @track = Track.find(params[:id])

    if @track.update
      render :show
    else
      render json: @track.errors.full_messages
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render :index
  end

  private
  def track_params
    params.require(:track).permit(:name, :lyrics, :description, :language, :artist)
  end
end
