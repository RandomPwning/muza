class Status
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :message, type: String
  field :user_id, type: String

  belongs_to :user

end

