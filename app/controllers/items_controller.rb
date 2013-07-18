class ItemsController < ApplicationController
  def index
    @items = Item.all
    render :json => @items
  end

  def create
    @item = Item.new(params[:item])

    if @item.save
      render :json => @item, :status => :created, :location => @item
    else
      render :json => @item.errors, :status => :unprocessable_entity 
    end
  end

  def update
    @item = Item.find(params[:id])

    if @item.update_attributes(params[:item])
      head :no_content
    else
      render :json => @item.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    head :no_content
  end
end
