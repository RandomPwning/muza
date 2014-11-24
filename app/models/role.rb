class Role
  include Mongoid::Document
  field :admin, type: String
  field :guest, type: String

  belongs_to :user

end
