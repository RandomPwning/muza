class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  
  field :first_name, type: String
  field :last_name, type: String
  field :dob, type: Date
  field :email, type: String
  field :password, type: String
  field :password_digest, type: String
  field :role_id, type: String

  has_secure_password

  belongs_to :roles
  has_many :statuses

end
