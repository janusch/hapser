class WeekSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :begin_date, :user_id, :status

  has_many :week_presences

end
