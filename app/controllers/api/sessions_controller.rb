class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
#    debugger
    if @user
      log_in(@user)
      render :show
    else
      render json: { errors: ['invalid credentials'] }, status: 422
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token!
      @session_token = nil
      render json: {}
    else
      render json: { errors: ['no current user'] }, status: 404
    end
  end
end
