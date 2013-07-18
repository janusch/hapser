class Week < ActiveRecord::Base
  attr_accessible :begin_date, :status, :user_id
  
  has_many :week_presences
end
