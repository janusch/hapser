class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :count, :created_at, :created_by, :deleted_at, :deleted_by, :completed_at, :completed_by
end
