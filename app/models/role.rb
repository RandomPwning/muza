class Role
  include Mongoid::Document
  include Mongoid::Timestamps
  field :role_name, type: String

  has_many :user

end
