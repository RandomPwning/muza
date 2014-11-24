class User
  include Mongoid::Document
  field :email, type: String
  field :password, type: String
  field :password_digest, type: String

  has_many :roles
  has_many :statuses, :through => :roles
end
