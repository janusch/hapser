class Item < ActiveRecord::Base
  attr_accessible :completed_at, :completed_by, :count, :created_at, :created_by, :deleted_at, :deleted_by, :title
end
