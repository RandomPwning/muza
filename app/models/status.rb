class Status
  include Mongoid::Document
  field :message, type: String
  field :description, type: String

  belongs_to :user

end

