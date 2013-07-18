class WeekPresenceSerializer < ActiveModel::Serializer
  attributes :id, :monday, :tuesday, :wednesday, :thursday, :friday
  has_one :week
  has_one :user
end
