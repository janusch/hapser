class User < ActiveRecord::Base
  attr_accessible :avatar_url, :email, :name, :provider, :uid

  def self.from_omniauth(auth)
    where(auth.slice("provider", "uid")).first || create_from_omniauth(auth)
  end

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider   = auth["provider"]
      user.uid        = auth["uid"]
      user.name       = auth["info"]["name"]
      user.email      = auth["info"]["email"]
      user.avatar_url = auth["info"]["image"]
    end
  end
end
