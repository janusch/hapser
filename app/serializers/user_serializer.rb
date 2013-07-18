class UserSerializer < ActiveModel::Serializer
  attributes :id, :provider, :uid, :name, :email, :avatar_url, :created_at, :updated_at
end
