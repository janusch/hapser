class WeekPresencesController < ApplicationController
  def index
    @week_presences = WeekPresence.all
    render :json => @week_presences
  end

  def create
    @week_presence = WeekPresence.new(params[:week_presence])

    if @week_presence.save
      render :json => @week_presence, :status => :created, :location => @week_presence
    else
      render :json => @week_presence.errors, :status => :unprocessable_entity 
    end
  end

  def update
    @week_presence = WeekPresence.find(params[:id])

    if @week_presence.update_attributes(params[:week_presence])
      head :no_content
    else
      render :json => @week_presence.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @week_presence = WeekPresence.find(params[:id])
    @week_presence.destroy

    head :no_content
  end

end
