class ApplicationController < ActionController::Base
  helper_method :current_user

  before_filter :authorize

  protect_from_forgery

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def default_url_options
    if Rails.env.production?
      {:host => "hapsch.dk"}
    else
      {:host => "localhost"}
    end
  end

  def authorize
    if !session[:user_id] && !request.env["omniauth.auth"]
      redirect_to '/auth/github'
    end
  end
end
