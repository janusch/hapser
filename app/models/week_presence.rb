class WeekPresence < ActiveRecord::Base
  belongs_to :week
  belongs_to :user
  attr_accessible :friday, :monday, :thursday, :tuesday, :wednesday, :week_id, :user_id
end
