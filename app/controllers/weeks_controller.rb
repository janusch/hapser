class WeeksController < ApplicationController
  def index
    @weeks = Week.all
    render :json => @weeks
  end

  def show
    @week = Week.find(params[:id])
    render :json => @week
  end

  def create
    @week = Week.new(params[:week])

    if @week.save
      render :json => @week, :status => :created, :location => @week
    else
      render :json => @week.errors, :status => :unprocessable_entity 
    end
  end

  def update
    @week = Week.find(params[:id])

    if @week.update_attributes(params[:week])
      head :no_content
    else
      render :json => @week.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @week = Week.find(params[:id])
    @week.destroy

    head :no_content
  end

end
